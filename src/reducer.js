import {List, Map} from 'immutable';

function setState(currentState, newState) {
    return currentState.merge(newState);
}
export default function(state = Map(), action) {

    switch (action.type) {

        case 'SET_STATE':
            return setState(state, action.state);
        default:
            return state;
    }
}