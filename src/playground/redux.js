import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1}={}) => ({
    type: 'INCREMENT',
     incrementBy
})


const decrementCount = ({decrementBy = 1 }={}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = 101}={}) => ({
    type: 'SET',
    count
})
const store = createStore ((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
        
         return {
             count: state.count + action.incrementBy
         }

        case  'DECREMENT' :
        
         return {
             count: state.count - action.decrementBy
         }

         case  'RESET' :
         return {
             count: 0
         }

         case  'SET' :
         return {
             count: action.count
         }
         
         
        default:
         return state;
    }
    
});

const unsubscribe = store.subscribe (()=> {
    console.log(store.getState());
})

console.log('running');

store.dispatch (incrementCount({incrementBy: 10}));
store.dispatch (incrementCount());

store.dispatch (resetCount());

store.dispatch (decrementCount())

store.dispatch (decrementCount({decrementBy: 5}))

store.dispatch (setCount ({count: 501}));



