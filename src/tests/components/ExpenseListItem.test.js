import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../component/ExpenseListItem';
import expenses from '../fixtures/expenses'

test('should render the expense item ', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})