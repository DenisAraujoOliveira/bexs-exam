import React, { forwardRef } from "react";
import useStyles from "./styles";
import Cancel from "@material-ui/icons/Cancel";
import Info from "@material-ui/icons/Info";
import { Typography } from "@material-ui/core";

interface MessageValidationProps {
    message: string;
}

const MessageValidation = forwardRef<HTMLDivElement, MessageValidationProps>(
    ({ message }: MessageValidationProps, ref) => {

        const classes = useStyles({});

        return (
            <Typography
                ref={ref}
                className={`${classes.errorWrapper}`}
            >
                {message}
            </Typography>
        );
    });

export default MessageValidation;
