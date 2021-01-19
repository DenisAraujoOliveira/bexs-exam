import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { Theme } from "./config/ThemeConfig";

const BuildTheme: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default BuildTheme;

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1024,
            xl: 1366
        }
    },
    palette: {
        primary: {
            main: Theme.primary,
            contrastText: Theme.contrastText
        },
        background: {
            default: Theme.background,
            paper: Theme.backgroundPaper
        },
        error:{
            main: Theme.errorMain
        }
    },
    shape:{
        borderRadius: 10,
    },
    typography: {
        color: Theme.color,
        fontFamily: "Verdana",
        fontSize: 16,
        h1: {
            fontWeight: "bold",
            fontSize: "20px",
        },
        h2: {
            fontWeight: "bold",
            fontSize: "18px",
        },
        h3: {
            fontWeight: "bold",
            fontSize: "16px",
        },
        h4: {
            fontWeight: "bold",
            fontSize: "14px",
        },
        h5: {
            fontWeight: "bold",
            fontSize: "13px",
        },
        h6: {
            fontWeight: "bold",
            fontSize: "12px",
            lineHeight: "24px"
        },
        subtitle: { fontSize: "14px" },
        caption: {
            color: Theme.primary,
            fontSize: "12px",
            lineHeight: "16px"
        },
        body1: { fontSize: "16px" },
        body2: { fontSize: "14px" },
        body3: { fontSize: "12px" }
    } as TypographyOptions
});