import React from "react";
import { HeaderItens } from "../headerItens";

const HeaderItem: React.FC<any> = ({style}) => {
    return (
        <>
            {
                HeaderItens.map(item => <li className={style}>{item.name}</li>)
            }
        </>
    );
};

export default HeaderItem;