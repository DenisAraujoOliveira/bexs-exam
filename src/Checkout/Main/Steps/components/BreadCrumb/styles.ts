import { makeStyles, Theme } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        zIndex: 2,
        [theme.breakpoints.down("sm")]:{
            width: "calc(50% + 55.5px)",
            alignItems: "center"
            
        }
    },
    link: {
        display: "flex",
        alignItems: "center"
    },
    navigateBefore:{
        color: theme.palette.primary.contrastText
    },
    navigateBeforeText:{
        [theme.breakpoints.down("sm")]:{
            display: "none"
        }
    },
    breadcrumbs:{
        [theme.breakpoints.down("sm")]:{
            display: "none"
        }
    },
    step: {
        margin: "0px 5px"
    },
    numbers: {
        position: "relative",
        padding: "0px 5px",
        borderRadius: "50%",
        border: "1px solid",
        fontWeight: "bold",
    },
    breadcrumbsMob:{
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.up("sm")]:{
            display: "none"
        }
    }
}));
export default useStyles;
