import React from "react";
import useStyles from "./styles";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Steps from "../../model/Steps";
import Item from "./item";
import { NavigateBefore } from "@material-ui/icons";
import { useStepsContext } from "../../StepsContext";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    event.preventDefault();
    console.info("You clicked a NavigateBefore in breadcrumb.");
}

function BreadCrumb() {
    const classes = useStyles({});
    const { currentStep, setCurrentStep } = useStepsContext();
    return (
        <div className={classes.root}>
            <Link className={`${classes.link} ${classes.navigateBefore}`} href="/" onClick={(handleClick)}>
                <NavigateBefore className={classes.navigateBefore} fontSize="large" />
                <Typography className={classes.navigateBeforeText} >{currentStep.textBack}</Typography>
            </Link>
            <Breadcrumbs className={classes.breadcrumbs} separator={<NavigateNextIcon color="primary" fontSize="small" />} aria-label="breadcrumb">
                {Steps.map(step => {
                    return React.createElement(Item, step);
                })};
            </Breadcrumbs>
            <div className={classes.breadcrumbsMob}>
                <Typography><b>Etapa {currentStep.index + 1} de {Steps.length} </b></Typography>
            </div>
        </div>
    );
}

export default BreadCrumb;