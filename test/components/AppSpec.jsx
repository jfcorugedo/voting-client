import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from '../../src/components/App';
import {Results} from '../../src/components/Results';
import {Voting} from '../../src/components/Voting';
import {Route} from 'react-router';

describe('App', () => {

    it('renders any children component', () => {

        const wrapper = shallow(<App>
            <Results />
        </App>);

        expect(wrapper.contains(<Results />)).to.equal(true);
    });
});