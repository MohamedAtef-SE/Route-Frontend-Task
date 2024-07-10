import { useNavigate } from 'react-router-dom'
import classes from './Layout.module.css'

export default function TableRow({ customer, transaction }) {

    const navigate = useNavigate();

    function displayCustomerChart(id) {

        navigate(`/customers/${id}`)
    }

    return <tr onClick={() => { displayCustomerChart(customer.id) }} className={classes.hovering} >
        <th scope="row">{customer.id}</th>
        <td>{customer.name}</td>
        <td>{transaction.date}</td>
        <td>{transaction.amount.toFixed(2)}</td>
    </tr>
}