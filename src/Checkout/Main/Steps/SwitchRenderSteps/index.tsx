import React from "react";
import Step2 from "../step2";
import { useStepsContext } from "../StepsContext";

function SwitchRenderSteps() {
    const { currentStep } = useStepsContext();
    
    return (
        React.createElement(Step2, null, null)
    );
}

export default SwitchRenderSteps;