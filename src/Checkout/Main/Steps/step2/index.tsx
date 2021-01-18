import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import Card from "./Card";
import { CardContextProvider } from "./CardContext";
import ContentStep2 from "./ContentStep2";


function Step2() {
    const classes = useStyles({});
    return (
        <CardContextProvider>
            <div className={classes.step2}>
                <div className={classes.firstItem}>
                    <div className={classes.addCard}>
                        <img className={classes.img} src="/assets/icons/card.png" />
                        <Typography variant="h2" className={classes.title}>Adicione um novo<br /> cartão de crédito</Typography>
                    </div>
                    <Card />
                </div>
                <ContentStep2/>
            </div>
        </CardContextProvider>
    );
}

export default Step2;