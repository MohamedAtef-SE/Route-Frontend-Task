import { useRouteLoaderData } from "react-router-dom"
import classes from './Layout.module.css'

export default function Filter({ byAmount, byCustomer }) {
    const { customers, transactions } = useRouteLoaderData('home-id');

    return <section className={classes.filter}>
        <div>
            <select onChange={(e) => byCustomer(e.target.value)} name="customers" id="cus-list">
                <option value="all">Filter By Customer</option>
                {customers.map(customer => <option key={customer.id} value={customer.id}>{customer.name}</option>)}
            </select>
        </div>

        <div>
            <select onChange={(e) => byAmount(e.target.value)} name="transaction" id="trans">
                <option value="all">Filter By Amount</option>
                {transactions.map(trans => <option key={trans.id} value={trans.amount}>{trans.amount}</option>)}
            </select>
        </div>

    </section>
}