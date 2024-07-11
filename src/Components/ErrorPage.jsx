import { useRouteError } from "react-router-dom"
import classes from './Layout.module.css'

export default function ErrorPage() {

    let title = "Found Error !!";
    let message = "Occurred Error Happend...😬";
    const error = useRouteError();

    if (error.status === 500) {
        message = error.data.message
    }


    return <section className={classes.error_section}>
        <h1>{title}</h1>
        <p>{message}</p>
    </section>
}