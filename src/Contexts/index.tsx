import React from "react";
import BuildTheme from "./buildTheme";

const Contexts: React.FC = ({ children }) => {
    return (
        <BuildTheme>
            {children}
        </BuildTheme>
    );
};

export default Contexts;