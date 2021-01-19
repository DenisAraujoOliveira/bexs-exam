import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    errorWrapper: {
        display: "flex",
        alignItems: "center",
        textAlign:"justify",
        fontSize: 12,
        width: "100%",
        color: theme.palette.error.main,
        marginTop: `-${theme.spacing(2)}px`,
    },


}));
export default useStyles;


