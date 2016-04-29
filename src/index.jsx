/**
 * Created by jfcorugedo on 28/04/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Avengers', 'Antman'];

ReactDOM.render(
    <Voting pair={pair} />,
    document.getElementById('app')
);
