import Voting from '../../src/components/Voting';
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

describe('Voting', () => {

    it('renders only Vote component', () => {

        const wrapper = shallow(<Voting pair={['Avengers', 'Antman']} />);

        //shallow only processes nodes at first level, so Vote and Winner won't be translated to html.
        //If you need to test inner components, use render function on them:
        //expect(wrapper.find('Vote').render().find('button')).to.have.length(2);
        expect(wrapper.find('Vote')).to.have.length(1);
        expect(wrapper.find('Winner')).to.have.length(0);
    });

    it('pass all the props to Vote component', () => {

        const wrapper = shallow(<Voting pair={['Avengers', 'Antman']} hasVoted="Antman" test="Unused"/>);

        expect(wrapper.find('Vote').props().pair).to.deep.equal(['Avengers', 'Antman']);
        expect(wrapper.find('Vote').props().hasVoted).to.equal('Antman');
        expect(wrapper.find('Vote').props().test).to.equal('Unused');
    });

    it('renders only Winner component when there is a winner', () => {

        const wrapper = shallow(<Voting pair={['Avengers', 'Antman']} winner="Antman" />);

        expect(wrapper.find('Winner')).to.have.length(1);
        expect(wrapper.find('Vote')).to.have.length(0);
    });
});