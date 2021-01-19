import React, { useEffect, useRef } from "react";
import useStyles from "./styles";
import { useField } from "@unform/core";
import { TextField } from "@material-ui/core";
import MessageValidation from "../MessageValidation";

interface InputProps {
    name: string;
    label: string;
    type: string;
    maxLength: number;
    classname?: string;
}

const Input: React.FC<InputProps> =
    ({ name, label, maxLength, classname, type }) => {
        const { fieldName, registerField, error } = useField(name);
        const classes = useStyles({ error });
        const inputRef = useRef<HTMLInputElement>(null);
        const errorMessageRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            registerField({
                name: fieldName,
                ref: inputRef.current,
                path: "value",
            });
        }, [fieldName, registerField]);

        return (
            <>

                <TextField
                    className={`${classes.inputs} ${classname}`}
                    name={name}
                    inputRef={inputRef}
                    label={label}
                    type={type}
                    InputLabelProps={{
                        style: error ? { color: "#FF3344" } : { color: "" }
                    }}
                    inputProps={{
                        maxLength: maxLength
                    }}
                />
                {/* <TextField
                        className={`${classes.inputs} ${classname}`}
                        name={name}
                        inputRef={inputRef}
                        label={label}
                        type={type}
                        
                        InputLabelProps={{
                            style: error ? { color: "#FF3344" } : { color: "" }
                        }}
                        inputProps={{
                            maxLength: maxLength
                        }}
                    /> */}
                {error && (
                    <MessageValidation ref={errorMessageRef} message={error} />
                )}
            </>
        );
    };

export default Input;
