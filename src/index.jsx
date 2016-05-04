import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

require('./style.css');

const routes = <Route component={App}>
    <Route path="/results" component={Results} />
    <Route path="/" component={Voting} />
</Route>;

//hashHistory manages the routing history with the hash portion of the URL
ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
);
