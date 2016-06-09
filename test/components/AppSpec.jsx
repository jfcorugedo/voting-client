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
            <p></p>
        </App>);

        console.log('App resulting HTML:', wrapper.html());

        expect(wrapper.contains(<Results />)).to.equal(true);
        expect(wrapper.contains(<p />)).to.equal(true);
    });
});