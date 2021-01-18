import React from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import useStyles from "./styles";
import { useCardContext } from "../CardContext";
import { Link } from "@material-ui/core";

function Card() {
    const classes = useStyles({});
    const { isFront, setIsFront } = useCardContext();
    return (
        <>
            <Link href="/" onClick={handleClick}>HI</Link>
            {isFront ? <FrontCard /> : <BackCard />}
        </>
    );
    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setIsFront(!isFront);
        console.info("You clicked a card");
    }
}

export default Card;