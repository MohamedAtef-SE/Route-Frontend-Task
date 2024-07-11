import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import classes from './Layout.module.css'


function Loading() {

    return <div className={classes.loading}>
        <ClipLoader />
    </div>
}

export default Loading;

