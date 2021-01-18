import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        display: "flex",
        background: theme.palette.background.paper,
        justifyContent: "center",
        padding: `${theme.spacing(8)}px 0px`,
        [theme.breakpoints.down("sm")]:{
            padding: "0px"
        }
    },
    mainContainer:{
        display: "flex",
        width: "100%",
        maxWidth: "1024px",
        position: "relative"
        
    }
}));
export default useStyles;
