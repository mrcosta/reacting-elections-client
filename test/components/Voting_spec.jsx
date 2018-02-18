import React from 'react';
import {mount, shallow} from 'enzyme';
import Voting from '../../src/components/Voting';
import 'jsdom-global/register';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';

Enzyme.configure({ adapter: new Adapter() });

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const wrapper = mount(<Voting pair={["Trainspotting", "28 Days Later"]}/>);
    const buttons = wrapper.find('button')

    expect(buttons).to.have.length(2);
  });
})
