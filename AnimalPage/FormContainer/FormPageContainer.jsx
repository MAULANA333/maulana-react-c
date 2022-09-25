import React, { useState } from "react";
import FormPage from "../Components/FormPage.jsx";

const FormPageContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    hobby: []
  });
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleChangeFormData = (ev) => {
    if (ev.target.name === "hobby") {
      setFormData({
        ...formData,
        [ev.target.name]: [...formData.hobby, ev.target.value]
      })
      return;
    }
    if (ev.target.name === "password") {
     if (ev.target.value.length < 5) {
       setIsPasswordError(true)
     } else {
       setIsPasswordError(false)
     }
    }
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = (ev) => {
    const form  = ev.currentTarget;
    if (form.checkValidity() === false) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    //alert(name + "\n" + email + "\n" + password + "\n" + gender)
    alert(formData.name + "\n" + formData.email
      + "\n" + formData.password + "\n" + formData.gender + "\n" + formData.hobby)

    ev.preventDefault();
  }
  return(
    <FormPage email={formData.email}
              name={formData.name}
              password={formData.password}
              isPasswordError={isPasswordError}
              handleSubmit={handleSubmit}
              handleChange={handleChangeFormData}/>
  )
}

export default FormPageContainer;
