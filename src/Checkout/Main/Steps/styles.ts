import { makeStyles, Theme } from "@material-ui/core/styles";
import { relative } from "path";

const useStyles = makeStyles((theme: Theme) => ({
    steps: {
        display: "flex",
        width: "100%",
        position: "relative",
        flexDirection: "column",
        padding: `${theme.spacing(7)}px ${theme.spacing(8)}px`,
        [theme.breakpoints.down("sm")]:{
            padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,

        }
    },
}));
export default useStyles;
