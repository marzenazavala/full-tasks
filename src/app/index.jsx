import React from 'react'
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { store } from './store'
import { Router } from 'react-router-dom';
import { history } from './store/history';

ReactDOM.render(
<Router history={history}>
    <Main/>
</Router>,document.getElementById('app'))

console.log(store.getState())