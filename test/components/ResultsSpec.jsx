import React from 'react';
import {expect} from 'chai';
import {List, Map} from 'immutable';
import Results from '../../src/components/Results';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Results', () => {

    it('renders as many entry divs as elements in the pair list', () => {

        const pair = List.of('Batman', 'Superman');

        const wrapper = shallow(<Results pair={pair} />);

        expect(wrapper.find('div.entry').length).to.equal(2);
    });

    it('renders entry name inside each section', () => {

        const pair = List.of('Batman', 'Superman');

        const wrapper = shallow(<Results pair={pair} />);

        expect(wrapper.find('div.entry').at(0).text()).to.contain('Batman');
        expect(wrapper.find('div.entry').at(1).text()).to.contain('Superman');
    });

    it('renders vote count of each entry', () => {

        const pair = List.of('Batman', 'Superman'),
              tally = Map({'Batman' : 23, 'Superman' : 12});

        const wrapper = shallow(<Results pair={pair} tally={tally} />);

        expect(wrapper.find('.voteCount').at(0).text()).to.equal('23');
        expect(wrapper.find('.voteCount').at(1).text()).to.equal('12');
    });

    it('invokes next callback when next button is pressed', () => {

        const pair = List.of('Batman', 'Superman'),
              onButtonClick = sinon.spy(),
              wrapper = shallow(<Results pair={pair} next={onButtonClick} />);

        wrapper.find('.next').simulate('click');


        expect(onButtonClick.calledOnce).to.equal(true);
    });

    it('renders the winner when there is one instead of rendering entries result', () => {

        const wrapper = shallow(<Results winner="Batman" pair={List.of('Batman', 'Superman')} tally={Map()} />);

        expect(wrapper.find('Winner')).to.have.length(1);
        expect(wrapper.find('.results')).to.have.length(0);
    });
});
