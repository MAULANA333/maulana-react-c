import React from "react";
import "./App.css";
import Home from "./Home.jsx";
import { Route, Routes } from "react-router-dom";
import AnimalPageContainer from "./AnimalPageContainer";
import AnimalDetailPageContainer from "./AnimalDetailPageContainer";
import FormPage from "../../todo_app/FormContainer/FormPage";
import FormPageContainer from "../FormContainer/FormPageContainer";
import { Store } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import store from "./store";
import counterSlice from "./counterSlice";
import ReadArticlePageContainer from "../FormContainer/ReadArticlePageContainer";
import CreateArticlePageContainer from "../FormContainer/CreateArticlePageContainer";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/animal" exact element={<AnimalPageContainer />} />
      <Route path="/animal/:id" exact element={<AnimalDetailPageContainer />} />
      <Route path="/form" exact element={<FormPageContainer/>} />
      <Route path="/ read-article" exact element ={<ReadArticlePageContainer />} /> 
      <Route path="/ create-article" exact element ={<CreateArticlePageContainer />} />           
    </Routes>
  )
}

export default App;
