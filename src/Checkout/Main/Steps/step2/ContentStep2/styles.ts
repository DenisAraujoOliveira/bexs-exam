import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    contentStep2: {
        width: "50%",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        [theme.breakpoints.down("sm")]:{
            width: "100%",
        }
    },
    wrapper:{
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
    },
    wrapperInputs:{
        width: "48%",
        paddingBottom: `${theme.spacing(3)}px`
    },
    btn:{
        padding: `${theme.spacing(1)}px ${theme.spacing(6)}px`
    }
}));
export default useStyles;
