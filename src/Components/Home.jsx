import { useRouteLoaderData } from "react-router-dom";
import MainTable from "./MainTable";
import classes from './Layout.module.css'

export default function Home() {

    const { customers, transactions } = useRouteLoaderData('home-id');

    return <section className={classes.home}>
        <MainTable trans={transactions} customersList={customers} />
    </section>
}