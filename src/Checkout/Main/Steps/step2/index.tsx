import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import Card from "./Card";
import { CardContextProvider } from "./CardContext";


function Step2() {
    const classes = useStyles({});
    return (
        <CardContextProvider>
            <div className={classes.step2}>
                <div className={classes.firstItem}>
                    <img className={classes.img} src="/assets/icons/card.png" />
                    <Typography variant="h2" className={classes.title}>Adicione um novo<br /> cartão de crédito</Typography>
                </div>
                <Card />
            </div>
        </CardContextProvider>
    );
}

export default Step2;