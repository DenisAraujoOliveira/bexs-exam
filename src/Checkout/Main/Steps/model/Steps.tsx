import React from "react";

export interface ISteps {
    text: string;
    textBack: string;
    index: number;
    component: any;
}

const Steps: ISteps[] = [
    {
        text: "Carrinho",
        textBack: "Alterar forma de pagamento",
        component: "Step2",
        index: 0
    },
    {
        text: "Pagamento",
        textBack: "Alterar forma de pagamento",
        component: "Step2",
        index: 1
    },
    {
        text: "Confirmação",
        textBack: "Alterar forma de pagamento",
        component: "Step2",
        index: 2
    },
];

export default Steps;