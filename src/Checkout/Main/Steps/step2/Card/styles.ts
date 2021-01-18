import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        width: "40%",
        maxWidth: "364px",
        transformStyle: "preserve-3d",
        [theme.breakpoints.down("sm")]:{
            width: "280px",
            marginBottom: "-60px",
        }
    },
    containerCard: {
        width: "100%",
        animation: "$flip 1000ms",
        position: "relative"
    },
    texts:{
        textShadow: "0px 1px 2px #000000B3",
        color: theme.palette.primary.contrastText,
        position: "absolute",
    },
    number:{
        bottom: "45%",
        left: "14px"
    },
    name:{
        bottom: "30px",
        left: "14px"
    },
    date:{
        bottom: "30px",
        right: "14px"
    },
    securityCode:{
        position: "absolute",
        top: "111px",
        right: "150px",
        fontWeight: "bold",
        [theme.breakpoints.down("sm")]:{
            top: "86px",
            right: "113px",

        }
    },
    "@keyframes flip": {
        "0%": {
            transform: "rotateY(180deg)"
        },
        "10%": {
            transform: "rotateY(185deg)"
            
        },
        "50%": {
            transform: "rotateY(-5deg)"
        },
        "100%": {
            transform: "rotateY(0deg)"
        }
    }
}));
export default useStyles;
