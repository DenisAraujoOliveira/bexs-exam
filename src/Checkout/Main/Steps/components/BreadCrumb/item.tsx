import React from "react";
import { Link } from "@material-ui/core";
import { ISteps } from "../../model/Steps";
import { CheckCircle } from "@material-ui/icons";
import useStyles from "./styles";
import { useStepsContext } from "../../StepsContext";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

function Item({ text, index }: ISteps) {
    const classes = useStyles({});
    const { currentStep } = useStepsContext();
    return (
        <Link className={classes.link} color="primary" href="/" onClick={handleClick}>
            { index === currentStep.index ? <CheckCircle fontSize="small" className={classes.step} /> : <span className={`${classes.step} ${classes.numbers}`}> {index + 1}</span>}
            { text }
        </Link>
    );
}

export default Item;