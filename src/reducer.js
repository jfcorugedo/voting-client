import {List, Map} from 'immutable';

/**
 * Merge the current state with a new one
 * @param currentState
 * @param newState
 * @returns {*}
 */
function setState(currentState, newState) {

    return currentState.merge(newState);
}

function resetVoted(state) {

    const currentPair = state.getIn(['vote', 'pair']);
    const hasVoted = state.get('hasVoted');

    if(hasVoted && !currentPair.contains(hasVoted)) {
        return state.delete('hasVoted');
    } else {
        return state;
    }
}

function vote(currentState, votedEntry) {

    const currentPair = currentState.getIn(['vote', 'pair']);
    if(currentPair.contains(votedEntry)) {

        return currentState.set('hasVoted', votedEntry);
    } else {
        return currentState;
    }
}

export default function(state = Map(), action) {

    switch (action.type) {

        case 'SET_STATE':
            return resetVoted(setState(state, action.state));
        case 'VOTE':
            return vote(state, action.entry);
        default:
            return state;
    }
};