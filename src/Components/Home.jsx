import { Await, useRouteLoaderData } from "react-router-dom";
import { Suspense } from "react";
import MainTable from "./MainTable";
import classes from './Layout.module.css'

export default function Home() {

    const { customers, transactions } = useRouteLoaderData('home-id');

    return <section className={classes.home}>
        <Suspense fallback={<p>Loading....</p>}>
            <Await resolve={transactions}>
                {(loadedTrans) => <MainTable trans={loadedTrans} customersList={customers} />}
            </Await>

        </Suspense>
    </section>
}