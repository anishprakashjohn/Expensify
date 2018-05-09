import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


test('should setup remove Expense action object',()=> {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit Expense action object',()=> {
    const action = editExpense( '123abc',{ description: '456rst'} )
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: '456rst'
        }
    })
})

test('should setup add Expense action object',()=> {
    const expenseData = {
        description: 'Rent',
        amount:109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense( expenseData )
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add Expense action object with defaults',()=> {
    const action = addExpense( )
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0 
        }
    })
})



