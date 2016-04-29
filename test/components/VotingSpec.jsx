import Voting from '../../src/components/Voting';
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

describe('Voting', () => {

    it('renders a pair of buttons', () => {

        const wrapper = shallow(<Voting pair={['Avengers', 'Antman']} />);

        expect(wrapper.find('button')).to.have.length(2);
    });

    it('renders entries ordered by position', () => {

        const wrapper = shallow(<Voting pair={['Avengers', 'Antman']} />);

        expect(wrapper.find('button').first().childAt(0).text()).to.equal('Avengers');
        expect(wrapper.find('button').last().childAt(0).text()).to.equal('Antman');
    });
});