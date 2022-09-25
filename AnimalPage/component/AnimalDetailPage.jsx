import React from "react";

const AnimalDetailPage = (
  {
    animalData,
    handleGoBack
  }
) => {

  const renderData = () => (
    <div className="d-flex flex-column align-items-center">
      <img src={animalData.imageLink} alt={animalData.id} style={{width: '200px', height: '200px'}}/>
      <span>Name: {animalData.name}</span>
      <span>Diet: {animalData.diet}</span>
      <button className="btn btn-success" onClick={handleGoBack}>Back</button>
    </div>
  )
  return(
    <div>
      {
        animalData
        ?
          renderData()
          :
          <div>Data kosong</div>
      }
    </div>
  )
}

export default AnimalDetailPage;
