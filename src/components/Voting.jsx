import React from 'react';
import Winner from './Winner';
import Vote from './Vote';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

/**
 * This module now exports two components: the pure component (Voting) and the connected component (VotingContainer):
 *
 * - The pure component is fully driver by the input parameters (props) it is given. It's a component equivalent
 * to a pure function
 *
 * - The connected component, on the other hand, wraps the pure version with some logic provided by react-redux
 * that will keep it in sync with the current value of the Redux store
 *
 * @type {*|Function}
 */
export const Voting =  React.createClass({

    mixins: [PureRenderMixin],
    render: function() {
        return <div>
            {this.props.winner ?
                <Winner winner={this.props.winner} /> :
                <Vote {...this.props} />
            }
        </div>;
    }
});

function mapStateToProps(state) {

    return {
        pair: state.getIn(['vote', 'pair']),
        hasVoted: state.get('hasVoted'),
        winner: state.get('winner')
    };
}

//Returns a connected version of our pure component Voting. That connected component wraps the pure component
//and keeps it in sync with the current value of the Redux store
export const VotingContainer = connect(mapStateToProps)(Voting);