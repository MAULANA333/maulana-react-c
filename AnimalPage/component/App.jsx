import React from "react";
import "./App.css";
import Home from "./Home.jsx";
import { Route, Routes } from "react-router-dom";
import AnimalPageContainer from "./AnimalPageContainer";
import AnimalDetailPageContainer from "./AnimalDetailPageContainer";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/animal" exact element={<AnimalPageContainer />} />
      <Route path="/animal/:id" exact element={<AnimalDetailPageContainer />} />
    </Routes>
  )
}

export default App;
