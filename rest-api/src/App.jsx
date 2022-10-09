import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageContainer from "./Containers/HomePageContainer.jsx";
import DetailPageContainer from "./Containers/DetailPageContainer.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePageContainer/>}/>
      <Route path="/detail/:id" exact element={<DetailPageContainer/>}/>
    </Routes> 
  )
}

export default App;
