import React from "react";
import { StepsContextProvider } from "./StepsContext";
import useStyles from "./styles";
import Rectangle from "./components/Rectangle";
import BreadCrumb from "./components/BreadCrumb";
import SwitchRenderSteps from "./SwitchRenderSteps";

function Steps() {
    const classes = useStyles({});
    return (
        <StepsContextProvider>
            <div className={classes.steps}>
                <Rectangle />
                <BreadCrumb/>
                <SwitchRenderSteps/>
            </div>
        </StepsContextProvider>
        
    );
}

export default Steps;