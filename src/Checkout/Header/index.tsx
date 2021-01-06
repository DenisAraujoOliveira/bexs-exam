import React from "react";
import HeaderItem  from "./Components/HeaderItem";
import useStyles from "./styles";

const Header: React.FC = () => {
    const classes = useStyles({});

    return (
        <header className={classes.root}>
            <div className={classes.headerContainer}>
                <img src="/assets/img/logo.png" />
                <ul className={classes.menuItems}>
                    <HeaderItem style={classes.menuItem} />
                </ul>
            </div>
        </header>
    );
};

export default Header;