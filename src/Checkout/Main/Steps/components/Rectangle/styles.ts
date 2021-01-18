import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    rectangle: {
        width: "35%",
        height: "100%",
        position: "absolute",
        background: theme.palette.primary.main,
        zIndex: 1,
        left: 0,
        top: 0,
        [theme.breakpoints.down("sm")]:{
            width: "100%",
            maxHeight: "310px"
        }
    }
}));
export default useStyles;
