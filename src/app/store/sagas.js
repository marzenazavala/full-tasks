import {all, take, put, select} from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';
import * as mutations from './actions';

const url = 'http://localhost:8880';

export function* taskCreationSaga(){
    try {
        while(true) {
        const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = 'U1';
        const taskID = uuid();
        yield put(mutations.createTask(taskID, ownerID, groupID))
        const { res } = yield axios.post(url + `/task/new`, {
            task: {
                id: taskID,
                name: "New Task again",
                group: groupID,
                owner: ownerID,
                isComplete: false
            }
        });
        console.log("Got response", res)
    } 
}catch (e) {
    console.log(e.message)
}
}

export function* taskModificationSaga(){
    while(true){
        const task = yield take([
            mutations.SET_TASK_GROUP,
            mutations.SET_TASK_NAME,
            mutations.SET_TASK_COMPLETE
        ]);
        const { res } = axios.post(url + `/task/update`, {
            task: {
                id: task.taskID,
                group: task.groupID,
                name: task.name,
                isComplete: task.isComplete
            }
        });
        console.log("Updated", res)
    }
}

export function* userAuthenticationSaga(){
    while(true){
        const {username, password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        try {
            const {data} = axios.post(url + `/authenticate`, {username, password})
            if(!data) {
                throw new Error()
            }
        } catch {
            console.log('Authentication failed')
            yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED))
        }
    }
}

export default function* rootSaga() {
    yield all([
        taskCreationSaga(),
        taskModificationSaga(),
        userAuthenticationSaga()
    ])
  }

