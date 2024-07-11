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

    const response = await fetch('https://raw.githubusercontent.com/MohamedAtef-SE/Route-Frontend-Task/master/src/data/database.json');
    if (!response.ok) {
        throw json({ message: "Ops!! Faild to Fetch Customers Or Transactions Data.🤔" }, { status: 500 })
    }
    else {
        const resData = await response.json();
        return resData
    }
}