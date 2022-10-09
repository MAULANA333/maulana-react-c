import React, { useState, UseEffect } from "react";
import axios from "axios";
import CreateArticlePageContainer from "../component/CreateArticlePage.jsx";
import { client } from "../api.js";

 const CreateArticlePageContainer = () => {
    const [articles, setArticles] = useState(initialState: []);
    const [loading, setLoading] = useState(initialState: true);



const getArticle = async () => {
const response =await client.get(url: "/");
 setArticles(response.data.onemany_article);
};

useEffect(effect: () => {
    getArticles() Promise<void>
    .then(() => {
        setLoading(value:false);
    })Promise<void>
    .catch((err) => {
        console.log(err)
    })
}, deps: [loading]);

return (
    <CreateArticlePage articles={articles} loading={loading}/>
);
};

export default CreateArticlePageContainer;
