import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        maxWidth: theme.breakpoints.width("xl"),
        [theme.breakpoints.down("sm")]:{
            display: "none"
        },
    },
    headerContainer: {
        width: "72vw",
        display: "flex",
        justifyContent: "space-between",
    },
    menuItems:{
        display: "flex",
        listStyle: "none",
        padding: "0",
        justifyContent: "space-around",
        margin: "0",
        alignItems: "center",
    },
    menuItem: {
        margin: `0px ${theme.spacing(2)}px`,
        background: "#3C3C3C 0% 0% no-repeat padding-box",
        color: "transparent",
        width: "100px",
        textAlign: "center",
        borderRadius: "5px",
        "&:first-child":{
            marginLeft: "0px"
        },
        "&:last-child":{
            marginRight: "0px"
        }
    }
    
}));
export default useStyles;
