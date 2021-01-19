import React, {  forwardRef } from "react";
import useStyles from "./styles";
import { Form as UnformForm } from "@unform/web";
import { FormHandles } from "@unform/core";

interface FormProps {
    children: React.ReactNode;
    classname: string;
    handleSubmit: (data: any) => void;
    handleChange?: (data: any) => void;
    handleFocus?: (data: any) => void;
}

const Form = forwardRef<FormHandles, FormProps>(
    ({ handleSubmit, classname ,children,handleChange,handleFocus }, ref) => {
        const classes = useStyles({});
        return (
            <UnformForm
                ref={ref}
                onSubmit={handleSubmit}
                onChange={handleChange}
                onFocus={handleFocus}
                className={`${classes.form} ${classname}`}>
                {children}
            </UnformForm>


        );
    }
);



export default Form;
