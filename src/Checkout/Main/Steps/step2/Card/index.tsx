import React from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import useStyles from "./styles";
import { useCardContext } from "../CardContext";

function Card() {
    const classes = useStyles({});
    const { isFront, setIsFront } = useCardContext();
    return (
        <>
            {isFront ? <FrontCard /> : <BackCard />}
        </>
    );
    
}

export default Card;