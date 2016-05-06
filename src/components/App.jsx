import React from 'react';

export default React.createClass({
    render: function() {
        //Renders all its children, expected to be in children property
        return this.props.children;
    }
});