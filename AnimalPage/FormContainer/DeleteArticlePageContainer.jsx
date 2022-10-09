import React from "react";
import { useEffect } from "react";
import { client } from "../api";
import DeleteArticlePage from "../component/DeleteArticlePage";

const DeleteArticlePageContainer = () => {
   const [articles, setArticles] = useState(initialStae: []);
   const [ loading, setLoading] = useState(initialState: true);
   const [ articleId, setArticleId] = useState(initialState: "");

   const handleInputChangeId = (id) => {
    setArticleId(id);
   };

   useEffect( effect: () => {
    getArticles() Promise<any>
    .then((res) => {
        setArticles(res);
        setLoading(value: false);
    }) Promise<any>
    .catch((err) => {
        console.log(err);
    });
   }, deps: [loading]);

   const handleSubmit = async (Event) => {
    event.preventDevault();
    await client.delete(articleId);
    setLoading(value: true);
   }

   return (
    <DeleteArticlePage articles={articles}
                       articleId={articleId}
                       handleInputChangeId={handleInputChangeId}
                       handleSubmit={handleSubmit}
                       loading={loading}/>
   );
   };

   export default DeleteArticlePageContainer;
   