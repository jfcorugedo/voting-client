import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Winner from '../../src/components/Winner';

describe('Winner', () => {

    it('renders winner when there is one', () => {

        const wrapper = shallow(<Winner winner="Superman" />);

        expect(wrapper.text()).to.contain("Superman");
    });
});

