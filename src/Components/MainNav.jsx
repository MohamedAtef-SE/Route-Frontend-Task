import { Link } from 'react-router-dom'
import classes from './Layout.module.css'

export default function MainNav() {
    return <main className={classes.navbar}>
        <h1><Link className={classes.Link} to="/">Customers Table</Link></h1>
    </main >
}