
import moment from 'moment'

export default [{
    id: '1',
    description: 'Rent',
    note: 'This is rent for Jan',
    amount: 10100,
    createdAt: 0
},{
    id: '2',
    description: 'Coffee',
    note: 'This is rent for Jan',
    amount: 100,
    createdAt: moment(0).subtract(4,'days').valueOf()
},
{
    id: '3',
    description: 'Rent Dec',
    note: 'This is rent for Dec',
    amount: 10050,
    createdAt: moment(0).add(4,'days').valueOf()
}]
