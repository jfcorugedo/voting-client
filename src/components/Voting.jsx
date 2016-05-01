/**
 * Created by jfcorugedo on 29/04/16.
 */
import React from 'react';
import classNames from 'classnames';

export default React.createClass({
    getPair: function() {
        return this.props.pair || [];
    },
    isDisabled: function() {
        return !!this.props.hasVoted;
    },
    hasVotedFor: function (entry) {
        return entry === this.props.hasVoted;
    },
    render: function() {
        return <div className="voting">
            {this.getPair().map(entry =>
                <button key={entry}
                        disabled={this.isDisabled()}
                        className={classNames({voted: this.hasVotedFor(entry)})}
                        //The component doesn't know anything about the action. It only invokes callback properties
                        onClick={() => this.props.vote(entry) }>
                    <h1>{entry}</h1>
                    {this.hasVotedFor(entry) ? <div className="label">Voted</div> : null }
                </button>
            )}
        </div>;
    }
});