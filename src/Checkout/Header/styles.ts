import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        maxWidth: theme.breakpoints.width("xl"),
    },
    
}));
export default useStyles;
