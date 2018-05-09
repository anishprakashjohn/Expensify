


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import {setTextFilter} from './actions/filters';
import selectExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';


import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();
store.dispatch(addExpense({ description: 'rent', amount: 100}));
store.dispatch(addExpense({ description: 'Water bill', amount: 250, createdAt: 125}));
store.dispatch(addExpense({ description: 'Water bill', amount: 350, createdAt: 50}));
// store.dispatch(setTextFilter('bill'));

// setTimeout(()=> {
//     store.dispatch(setTextFilter());
// },3000)

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);



ReactDOM.render(jsx,document.getElementById('app'));