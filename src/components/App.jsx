import React from 'react';

export default React.createClass({
    render: function() {
        //Renders all its children, expected to be in children property
        //We have to wrap all the children into one div because render must return only one element
        return <div>{this.props.children}</div>;
    }
});