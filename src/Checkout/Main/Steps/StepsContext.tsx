import React, { createContext, useCallback, useContext, useState } from "react";
import Steps, { ISteps } from "./model/Steps";

interface IStepsContext {
    loading: boolean;
    setLoading(isLoading: boolean): void;
    currentStep: ISteps;
    setCurrentStep(step: ISteps): void;
}

const StepsContext = createContext<IStepsContext>({} as IStepsContext);

const StepsContextProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<ISteps>(Steps[1]);

    return (
        <StepsContext.Provider value={{ loading, setLoading, currentStep, setCurrentStep }}>
            {children}
        </StepsContext.Provider>
    );
};

function useStepsContext(): IStepsContext {
    const context = useContext(StepsContext);
    return context;
}

export { StepsContextProvider, useStepsContext };
