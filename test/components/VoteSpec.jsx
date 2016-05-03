import Vote from '../../src/components/Vote';
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Vote', () => {

    it('renders a pair of buttons', () => {

        const wrapper = shallow(<Vote pair={['Avengers', 'Antman']} />);

        expect(wrapper.find('button')).to.have.length(2);
    });

    it('renders entries ordered by position', () => {

        const wrapper = shallow(<Vote pair={['Avengers', 'Antman']} />),
              buttons = wrapper.find('button');

        expect(buttons.first().childAt(0).text()).to.equal('Avengers');
        expect(buttons.last().childAt(0).text()).to.equal('Antman');
    });

    it('simulates click events', () => {

        const onButtonClick = sinon.spy(),
              wrapper = shallow(<Vote pair={['Avengers', 'Antman']} vote={onButtonClick} />);

        const firstButton = wrapper.find('button').first();
        firstButton.simulate('click');

        expect(onButtonClick.calledOnce).to.be.true;
        expect(onButtonClick.calledWith("Avengers")).to.be.true;
    });

    it('disables buttons when user has voted', () => {

        const wrapper = shallow(<Vote pair={['Avengers', 'Antman']} hasVoted="Avengers" />);

        expect(wrapper.find('button').at(0).props().disabled).to.equal(true);
        expect(wrapper.find('button').at(1).props().disabled).to.equal(true);
    });

    it('adds label to the voted entry', () => {

        const wrapper = shallow(<Vote pair={['Avengers', 'Antman']} hasVoted="Antman" />);

        expect(wrapper.find('button').at(1).find('.label').text()).to.equal('Voted');
    });
});