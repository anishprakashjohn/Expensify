import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../component/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', ()=> {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})


test ('should render ExpenseForm with date',() => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})

test ('should render error when form is not submitted with data',() => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=> {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test ('should set description on input change',() => {
    const wrapper = shallow(<ExpenseForm />);
    const value= 'New Description';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
})

test ('should set textArea change',() => {
    const wrapper = shallow(<ExpenseForm />);
    const value= 'New Note value';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change',{
        target: {value}
    });
    expect(wrapper.state('textArea')).toBe(value);
})

test ('should set amount valid value',() => {
    const wrapper = shallow(<ExpenseForm />);
    const value= '23.50';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
})

test ('should set amount invalid value',() => {
    const wrapper = shallow(<ExpenseForm />);
    const value= '23.501';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
})

test('should call on submit form for valid form submission', ()=> {
    const onSubmitSpy= jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=> {}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
});

test('should set new date on date range', ()=> {
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set new calendarFocus', ()=> {
    const wrapper = shallow(<ExpenseForm />);
    const focused = true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(focused);
})




