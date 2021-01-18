import React from "react";
import useStyles from "./styles";

function Rectangle() {
    const classes = useStyles({});
    return (
        <span className={classes.rectangle}></span>
    );
}

export default Rectangle;