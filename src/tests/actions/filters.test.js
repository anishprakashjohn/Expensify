import {setTextFilter, setStartDate, setEndDate,sortByDate, sortByAmount} from '../../actions/filters'
import moment from 'moment';

test('should generate set start date action object', ()=> {
    const action= setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)   
    })
})

test('should generate set end date action object', ()=> {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0) 
    })
})

test('should sort list by Date', ()=> {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should sort list by Amount', ()=> {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should set TextFilter', ()=> {
    const textFilter='abc'
    const action = setTextFilter(textFilter);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: textFilter
    })
})

test('should clear TextFilter', ()=> {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:''
    })
})