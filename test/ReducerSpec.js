import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

    it('handles SET_STATE', () => {

        const initialState = Map(),
              action = {
                  type: 'SET_STATE',
                  state: Map({
                      vote: Map({
                          pair: List.of('Batman', 'Superman'),
                          tally: Map({
                              Batman: 23,
                              Superman: 1
                          })
                      })
                  })
              };

        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Batman', 'Superman'],
                tally: {
                    Batman: 23,
                    Superman: 1
                }
            }
        }));
    });

    it('must know how to deal with play JS instead of immutable structures', () => {

        const initialState = Map(),
              action = {
                type: 'SET_STATE',
                state: {
                    vote: {
                        pair: ['Batman', 'Superman'],
                        tally: {
                            Batman: 23,
                            Superman: 1
                        }
                    }
                }
              };

        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Batman', 'Superman'],
                tally: {
                    Batman: 23,
                    Superman: 1
                }
            }
        }));
    });

    it('must know how to handle SET_STATE without any inital status', () => {

        const action = {
                type: 'SET_STATE',
                state: {
                    vote: {
                        pair: ['Batman', 'Superman'],
                        tally: {
                            Batman: 23,
                            Superman: 1
                        }
                    }
                }
              };

        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Batman', 'Superman'],
                tally: {
                    Batman: 23,
                    Superman: 1
                }
            }
        }));
    });

    it('handles VOTE by setting hasVote flag', () => {

        const initialState = fromJS({
            vote: {
                pair: ['Superman', 'Batman'],
                tally: {
                    Superman: 1
                }
            }
        });
        const action = {type: 'VOTE', entry: 'Batman'};

        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Superman', 'Batman'],
                tally: {
                    Superman: 1
                }
            },
            hasVoted: 'Batman'
        }));
    });

    it('does not set hasVoted for VOTE on invalid entry', () => {

        const initialState = fromJS({
            vote: {
                pair: ['Superman', 'Batman'],
                tally: {
                    Superman: 1
                }
            }
        });
        const action = {type: 'VOTE', entry: 'Antman'};

        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Superman', 'Batman'],
                tally: {
                    Superman: 1
                }
            }
        }));
    });

    it('removes hasVoted property whenever a SET_STATUS is received with different pair', () => {

        const initialState = fromJS({
            vote: {
                pair: ['Superman', 'Batman'],
                tally: {
                    Superman: 12,
                    Batman: 32
                }
            },
            hasVoted: 'Batman'
        });
        const action = {
            type: 'SET_STATE',
            state: {
                vote: { pair: ['Antman', 'Deadpool'] }
            }
        };

        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Antman', 'Deadpool']
            }
        }));
    });
});