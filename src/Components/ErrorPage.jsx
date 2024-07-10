import { useRouteError } from "react-router-dom"
import classes from './Layout.module.css'

export default function ErrorPage() {

    let title = "Found Error !!";
    let message = "Maybe you forget to Run Json-Server...😬";
    let RUN_SERVER = "General Note don't forget to Run-Server: npx json-server data/database.json --port 8000"
    const error = useRouteError();

    if (error.status == 500) {
        message = error.data.message
    }


    return <section className={classes.error_section}>
        <h1>{title}</h1>
        <p>{message}</p>
        <span className={classes.note}>{RUN_SERVER}</span>

    </section>
}