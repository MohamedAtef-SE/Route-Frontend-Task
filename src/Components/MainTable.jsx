import TableRow from "./TableRow"
import Filter from './Filter';
import { useState } from "react";
import classes from './Layout.module.css'

export default function MainTable({ customersList, trans }) {
    const [transDetails, setTransDetails] = useState(trans)

    function filterByCustomer(customerID) {
        if (customerID === 'all') {
            setTransDetails(trans)
            return;
        }
        const updatedTrans = trans.filter(tran => tran.customer_id === +customerID);
        setTransDetails(updatedTrans)
    }

    function filterByAmount(value) {
        if (value === 'all') {
            setTransDetails(trans)
            return;
        }
        const updatedTrans = trans.filter(tran => tran.amount === +value);
        setTransDetails(updatedTrans)
    }


    return <div>
        <Filter byAmount={filterByAmount} byCustomer={filterByCustomer} />
        <table className={`table ${classes.table} `}>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Customer-ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Transaction Date</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                {transDetails.map(transaction => <TableRow key={transaction.id}
                    transaction={transaction}
                    customer={customersList.find(customer => customer.id === +transaction.customer_id)} />)}
            </tbody>
        </table>
    </div>
} 