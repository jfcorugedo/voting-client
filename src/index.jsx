import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import {setState} from './actionCreators';
import io from 'socket.io-client';

require('./style.css');

const store = createStore(reducer);

//Establish a new websocket connection
const socket = io(`${location.protocol}//${location.hostname}:8090`);

//Listen to any 'state' event received
socket.on('state', state => {
    console.log('Received state action', state);
    store.dispatch(setState(state));
});

const routes = <Route component={App}>
    <Route path="/results" component={ResultsContainer} />
    <Route path="/" component={VotingContainer} />
</Route>;

//hashHistory manages the routing history with the hash portion of the URL
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
