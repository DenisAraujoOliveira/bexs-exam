import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useCardContext } from "../CardContext";
import useStyles from "./styles";

function FrontCard() {
    const classes = useStyles({});
    const { card } = useCardContext();
    return (
        <div className={classes.card}>
            <div className={classes.containerCard}>
                <img className={classes.containerCard} src="/assets/img/front_card_bg.png" />
                <Typography className={`${classes.texts} ${classes.number}`} variant="body1" >{card.number}</Typography>
                <Typography className={`${classes.texts} ${classes.name}`} variant="body1" >{card.name}</Typography>
                <Typography className={`${classes.texts} ${classes.date}`} variant="body1" >{card.date}</Typography>
            </div>
        </div>
    );
}
export default FrontCard;