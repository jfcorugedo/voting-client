import React from 'react';
import {List, Map} from 'immutable';

const pair  = List.of('Avengers', 'Antman'),
      tally = Map({'Avengers':15, 'Antman':8});

export default React.createClass({
    render: function() {
        //Renders all its children, expected to be in children property
        return React.cloneElement(this.props.children, {pair: pair, tally: tally});
    }
});