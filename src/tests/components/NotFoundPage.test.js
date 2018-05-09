import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../component/NotFoundPage';

test('should render NotFoundpage', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot();
})