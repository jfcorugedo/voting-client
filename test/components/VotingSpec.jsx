import Voting from '../../src/components/Voting';
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Voting', () => {

    it('renders a pair of buttons', () => {

        const wrapper = shallow(<Voting pair={['Avengers', 'Antman']} />);

        expect(wrapper.find('button')).to.have.length(2);
    });

    it('renders entries ordered by position', () => {

        const wrapper = shallow(<Voting pair={['Avengers', 'Antman']} />);
        const buttons = wrapper.find('button');

        expect(buttons.first().childAt(0).text()).to.equal('Avengers');
        expect(buttons.last().childAt(0).text()).to.equal('Antman');
    });

    it('simulates click events', () => {

        const onButtonClick = sinon.spy();
        const wrapper = shallow(<Voting pair={['Avengers', 'Antman']} vote={onButtonClick} />);
        const firstButton = wrapper.find('button').first();

        firstButton.simulate('click');

        expect(onButtonClick.calledOnce).to.be.true;
        expect(onButtonClick.calledWith("Avengers")).to.be.true;
    });
});