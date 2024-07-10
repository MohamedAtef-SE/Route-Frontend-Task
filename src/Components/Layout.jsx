import { defer, json, Outlet } from "react-router-dom";
import MainNav from './MainNav';
import Footer from './Footer';


export default function Layout() {

    return <main>
        <MainNav />
        <Outlet />
        <Footer />
    </main>
}


async function customersLoader() {
    const response = await fetch('http://localhost:8000/customers');
    if (!response.ok) {
        throw json({ message: "Ops!! Can't fetch Customers Data." }, { status: 500 })
    }
    else {
        const resData = await response.json();
        return resData
    }
}

async function transactionsLoader() {
    const response = await fetch('http://localhost:8000/transactions');
    if (!response.ok) {
        throw json({ message: "Ops!! Faild to Fetch Transaction Data." }, { status: 500 })
    }
    else {
        const resData = await response.json();
        return resData
    }
}


export async function loader() {

    return defer({
        customers: await customersLoader(),
        transactions: await transactionsLoader(),
    })
}