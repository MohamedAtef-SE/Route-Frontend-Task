import { json, Outlet } from "react-router-dom";
import MainNav from './MainNav';
import Footer from './Footer';


export default function Layout() {

    return <main>
        <MainNav />
        <Outlet />
        <Footer />
    </main>
}

export async function loader() {

    const response = await fetch('https://mohamedatef-se.github.io/Route-Frontend-Task/database.json');
    if (!response.ok) {
        throw json({ message: "Ops!! Faild to Fetch Customers Or Transactions Data.🤔" }, { status: 500 })
    }
    else {
        const resData = await response.json();
        return resData
    }
}