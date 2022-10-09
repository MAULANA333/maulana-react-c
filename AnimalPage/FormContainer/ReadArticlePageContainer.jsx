import React from "react";
import ReadArticlePage from ".../Component/ReadArticlePage.jsx";
import axios from "axios";
import { getArticle } from "../api";


const ReadArticlePageContainer = () => {
    const [article, setArticles] =(initialState: []);
    const [loading, setLoading] =(initialState: true);
 
    const setReload = () => {
        setLoading(value:true);
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
    <ReadArticlePage articles={articles} loading={loading}/>
);
};

export default ReadArticlePageContainer;
