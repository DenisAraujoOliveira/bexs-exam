import React, { createContext, useCallback, useContext, useState } from "react";

const initialCard: ICard = {
    name: "NOME DO TITULAR",
    number: "* * * * * * * * * * * * * * * *",
    securityCode: "***",
    date: "00/00"
};

interface ICard{
    name: string;
    date: string;
    securityCode: string;
    number: string;
}

interface ICardContext {
    loading: boolean;
    setLoading(isLoading: boolean): void;
    card: ICard;
    setCard(card: ICard): void;
    isFront: boolean;
    setIsFront(isFront: boolean): void;
}

const CardContext = createContext<ICardContext>({} as ICardContext);

const CardContextProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [card, setCard] = useState<ICard>(initialCard);
    const [isFront, setIsFront] = useState<boolean>(true);

    return (
        <CardContext.Provider value={{ loading, setLoading, card, setCard, isFront, setIsFront}}>
            {children}
        </CardContext.Provider>
    );
};

function useCardContext(): ICardContext {
    const context = useContext(CardContext);
    return context;
}

export { CardContextProvider, useCardContext };
