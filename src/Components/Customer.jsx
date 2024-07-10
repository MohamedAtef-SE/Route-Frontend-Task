import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import Chart from "./Chart";
import { useEffect, useState } from "react";
import classes from './Layout.module.css'


export default function Customer() {

    const [transData, setTransData] = useState(null);
    const { id, name } = useLoaderData();
    const { transactions } = useRouteLoaderData('home-id');

    useEffect(() => {
        const data = transactions.filter(trans => trans.customer_id == id);
        setTransData(data);
    }, [transactions])

    return <section className={classes.customer_details}>
        <h2>{name}</h2>
        {transData && <Chart data={transData} />}
    </section>
}


export async function loader({ params }) {
    const id = params.id;
    const response = await fetch(`http://localhost:8000/customers?id=${id}`)
    if (!response.ok) {
        throw json({ message: "Faild to fetch Customer Chart Details" }, { status: 500 })
    }
    else {
        const resData = await response.json();
        return resData[0];
    }
}