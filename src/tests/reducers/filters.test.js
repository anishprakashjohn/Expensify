import filterReducer from '../../reducers/filters';
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filterReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),     
        endDate: moment().endOf('month')
    })

})

test ('should set sortBy to Amount', () => {
    const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})

test ('should set sortBy to Date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filterReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
})



test ('should set text for filter', () => {
    const text= '123abc';
    const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text});
    expect(state.text).toBe('123abc')
})

test ('should set start date for filter', () => {
    const startDateTest = moment().startOf('day');
    
    
    const state = filterReducer(undefined, {type: 'SET_START_DATE', startDate: startDateTest });
    expect(state.startDate).toBe(startDateTest)
})

test ('should set end date for filter', () => {
    const endDateTest = moment().endOf('year');
    const state = filterReducer(undefined, {type: 'SET_END_DATE', endDate: endDateTest});
    expect(state.endDate).toBe(endDateTest)
})