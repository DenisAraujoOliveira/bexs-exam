import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    step2: {
        zIndex: 2,
        [theme.breakpoints.down("sm")]:{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    },
    firstItem:{
        display: "flex",
        alignItems: "center",
        margin: `${theme.spacing(6)}px 0px ${theme.spacing(2)}px`
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
