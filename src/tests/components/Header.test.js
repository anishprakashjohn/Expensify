import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../component/Header';


test('should render Header correctly', () => {
    const wrapper=shallow(<Header />);
    // expect(wrapper.find('h1').text()).toBe('Expensify')
    // expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer ();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})

