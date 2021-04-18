import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store'
import Dashboard from './Dashboard';
import { Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import TaskDetails from './TaskDetails';
import Login from './Login';


const RouteGuards = Component => ({match}) => {
  console.info("Route guard", match)
  if(!store.getState().session.authenticated){
    return <Redirect to="/" />
  } {
    return <Component match={match}/>
  } 
}

const Main = () => (
  <Provider store={store}>
    <div>
      <Navigation />
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" render={RouteGuards(Dashboard)}/>
      <Route exact path="/task/:id" render={RouteGuards(TaskDetails)}/>
    </div>
  </Provider>
)


export default Main