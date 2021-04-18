import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from '../../server/defaultState';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import * as mutations from './actions';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    session(userSession = defaultState.session || {}, action ) {
      let {type, authenticated, session} = action;
      switch (type) {
        case mutations.REQUEST_AUTHENTICATE_USER:
          return {...userSession, authenticated: mutations.AUTHENTICATING};
        case mutations.PROCESSING_AUTHENTICATE_USER:
          return {...userSession, authenticated}
        default: return userSession
      }
    },
    tasks(tasks = defaultState.tasks, action){
      switch(action.type) {
        case mutations.CREATE_TASK:
          return [...tasks, {
            id: action.taskID,
            name: "New task",
            group: action.groupID,
            owner: action.ownerID,
            isComplete: false
          }]
        case mutations.SET_TASK_COMPLETE:
          return tasks.map(task => {
            return (task.id === action.taskID) ? {...task, isComplete: action.isComplete} : task;
          })
        case mutations.SET_TASK_NAME:
          return tasks.map(task => {
            return (task.id === action.taskID) ? {...task, name: action.name} : task;
          })
        case mutations.SET_TASK_GROUP:
          return tasks.map(task => {
            return (task.id === action.taskID) ? {...task, group: action.groupID} : task;
          })
      }
      return tasks
    },
    comments(comments = defaultState.comments){
      return comments
    },
    groups(groups = defaultState.groups){
      return groups
    },
    users(users = defaultState.users){
      return users
    }
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

sagaMiddleware.run(rootSaga)


  
