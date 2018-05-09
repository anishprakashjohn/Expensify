
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
// ADD-EXPENSE

const addExpense = (
    {
        description = '', 
        note='', 
        amount =0, 
        createdAt= 0 
    }={}
) => ({
    type: 'ADD_EXPENSE',
    expense : {
        id: uuid,
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE
const removeExpense = ({description}) => ({
    type: 'REMOVE_EXPENSE',
    description
})

//EDIT_EXPENSE

const editExpense = (description, updates) => ({
    type: 'EDIT_EXPENSE',
    description,
    updates
})
//SET_TEXT_FILTER

const setTextFilter = (text='') => ({
    type: 'SET_TEXT_FILTER',
    text
})



//SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

//SET_START_DATE

const setStartDate = (startDate ) => ({
    type: 'SET_START_DATE',
    startDate
})
//SET_END_DATE

const setEndDate = (endDate ) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expenses Reducer
const expensesReducerDefaultState=[];
const expenseReducer = (state = expensesReducerDefaultState , action) => {

    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(element => action.description != element.description)
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if(expense.description == action.description){                    
                   return {                       
                    ...expense, 
                    ...action.updates
                   } 
                 }else {
                    return expense
                }
            }
        )            
        default: 
        return state;
    }

}

// Filter Reducer

const filterReducerDefaultState = { 
    text: '', 
    sortBy: 'date', 
    startDate: undefined,     
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState , action) => {

    switch (action.type){
        case 'SET_TEXT_FILTER':
         return {
             ...state,
             text: action.text
         }
        
        case 'SORT_BY_AMOUNT':
         return {
             ...state,
             sortBy: 'amount'
        }
        case 'SORT_BY_DATE':
         return {
            ...state,
             sortBy: 'date'
        }

        case 'SET_START_DATE': 
            return {
            ...state,
             startDate:  action.startDate 
        }

        case 'SET_END_DATE': 
            return {
            ...state,
             endDate:  action.endDate 
        }
        
        default: 
            return state;
    }

}

//timestamps
// 33400

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense)=>{
        
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = (expense.description.toLowerCase()).includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy ==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

// Store creatuib 
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer

    })
)
// Store Subscribe
store.subscribe (()=> {
    const state= store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})


// Store Dispatch

const expenseOne = store.dispatch (addExpense({description: 'rent Jan', amount: 100, createdAt: 220}));
const expenseTwo = store.dispatch (addExpense({description: 'rentFeb', amount: 150, createdAt: 390}));
const expenseThree = store.dispatch (addExpense({description: 'rent Feb', amount: 300, createdAt: 390}));
// const descript= "rentFeb";
// store.dispatch (removeExpense ({description: expenseOne.expense.description}));
// store.dispatch (editExpense ('rentFeb', {amount: 500, description: 'coffee'}));
store.dispatch(setTextFilter('feb'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(400));

const demoState = {
    expenses: [{
        id: 'poijasfwer',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 545000,
        createdAt: 0

    }],
    filters: {
        text : 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined

    }
}

//  const user = {
//      name: 'Jen',
//      age: 24
//  }

//  console.log({
//      age:29,
//      ...user,
//      location: 'new'
//     })

