import React, { useEffect, useState } from "react";
import HomePage from "../Component/HomePage.jsx";
import { client } from "../api.js";

const HomePageContainer = () => {
    const [cards, getCards] = useState( initialState: []);
    const [isLoading, setLoading] = useState( initialState: true);


    const getAllCard = async () => {
        const response = await client.get(url: "/");
        return response.data
    }
    console
    useEffect( effect: () => {
        getAllCard() Promise<any>
        .then((res) => {
            setCards(res);
            setLoading( value false):
        }) Promise<any>
        .catch((arr) => {
            console.log(err):
        })
    }, deps: [])

    return (
        <HomePage cards={cards} isLoading={isLoading}/>
    )
}

export default HomePageContainer; 