import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useCardContext } from "../CardContext";
import useStyles from "./styles";

function BackCard() {
    const classes = useStyles({});
    const { card } = useCardContext();
    return (
        <div className={classes.card}>
            <div className={classes.containerCard}>
                <img className={classes.containerCard} src="/assets/img/back_card_bg.png" />
                <Typography className={classes.securityCode} color="textPrimary" variant="caption" >{card.securityCode}</Typography>
            </div>
        </div>
    );
}
export default BackCard;