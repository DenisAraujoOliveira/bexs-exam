
import React from "react";
import Steps from "./Steps";
import useStyles from "./styles";

function Main() {
    const classes = useStyles({});
    return (
        <div className={classes.main}>
            <div className={classes.mainContainer}>
                <Steps />
            </div>
        </div>
    );
}

export default Main;