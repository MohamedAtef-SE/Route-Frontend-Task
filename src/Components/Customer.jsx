import { useParams, useRouteLoaderData } from "react-router-dom";
import Chart from "./Chart";
import { useEffect, useState } from "react";
import classes from './Layout.module.css'


export default function Customer() {
    const { id } = useParams();
    const [transData, setTransData] = useState(null);
    const [customer, setCustomer] = useState();
    const { transactions, customers } = useRouteLoaderData('home-id');

    useEffect(() => {
        if (transactions) {
            const data = transactions.filter(trans => trans.customer_id === +id);
            setTransData(data);
        }
        if (customers) {
            const exactCustomer = customers.find(customer => customer.id === +id);
            setCustomer(exactCustomer);
        }
    }, [transactions, customers, id])

    return <section className={classes.customer_details}>
        {customer && <h1 className={classes.H1}>{customer.name}</h1>}
        {transData && <Chart data={transData} />}
    </section>
}