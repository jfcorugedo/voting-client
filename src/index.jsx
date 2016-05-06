import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

require('./style.css');

const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: ['Batman', 'Superman'],
            tally: {
                Batman: 23,
                Superman: 12
            }
        }
    }
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
