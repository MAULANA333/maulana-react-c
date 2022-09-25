import AnimalDetailPage from "../Components/AnimalDetailPage.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { animals } from "../data.js";

const AnimalDetailPageContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animalData, setAnimalData] = useState();

  useEffect(() => {
    const animal = animals.find((anml) => anml.id === +id);
    if (animal) {
      setAnimalData(animal);
    }
  },[id]);

  const handleGoBack = () => {
    navigate(-1);
  }
  return(
    <AnimalDetailPage animalData={animalData} handleGoBack={handleGoBack}/>
  )
}

export default AnimalDetailPageContainer;
