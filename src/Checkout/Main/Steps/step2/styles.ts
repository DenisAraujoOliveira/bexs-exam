import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    step2: {
        zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]:{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    },
    firstItem:{
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]:{
            marginBottom: `${theme.spacing(5)}px`
        }
    },
    addCard:{
        display: "flex",
    },
    img:{
        width: "40px",
        height: "40px",
        marginRight: `${theme.spacing(2)}px`
    },
    title:{
        color: theme.palette.primary.contrastText
    }
}));
export default useStyles;
