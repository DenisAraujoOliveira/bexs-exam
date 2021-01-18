import React from "react";
import Contexts from "./Contexts";
import Header from "./Checkout/Header";
import Main from "./Checkout/Main";


function App() {
    return (
        <>
            <style>
                {`body {
                    margin: 0;
                    padding: 0;
                }`}
            </style>
            <Contexts>
                <Header></Header>
                <Main />
            </Contexts>
        </>
    );
}

export default App;
