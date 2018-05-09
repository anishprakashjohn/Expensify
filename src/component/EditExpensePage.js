import React from 'react';
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {editExpense} from '../actions/expenses'

// const EditExpensePage = (props) => {
//     return (
//     <p>
//         <ExpenseForm 
//             expense={props.expense}
//             onSubmit = {(expense)=> {
//                 props.dispatch(editExpense(props.expense.id,expense));
//                 props.history.push('/');
//         }}/>
//         <button 
//             onClick={()=>{
//             props.dispatch(removeExpense({id: props.expense.id}));
//             props.history.push('/');
//         }}> Remove </button>
//     </p>
// )
// }

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    }
    render () {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense} 
                    onSubmit={this.onSubmit}/>
                <button onClick = {this.onRemove}>Remove</button>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch,props) => ({
    editExpense: (expenseId,expense) => dispatch(editExpense(expenseId, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
})

const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id=== props.match.params.id;
        })
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
