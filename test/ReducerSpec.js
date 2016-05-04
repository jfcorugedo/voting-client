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
});