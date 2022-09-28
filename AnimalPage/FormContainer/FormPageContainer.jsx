import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormPage from "../Components/FormPage.jsx";
import { setUserEmail } from "../feature/userSlice.js";

const FormPageContainer = () => {
  const count = useSelector((state)=> state.counter.value);
  const dispacth = useDispatch();
  const navigate = useNavigate();

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
    // alert(formData.name + "\n" + formData.email
    //   + "\n" + formData.password + "\n" + formData.gender + "\n" + formData.hobby)
    dispacth (setUserEmail(formData.email))
    navigate("/");
    

    ev.preventDefault();
  }
  return(
    <FormPage email={formData.email}
              name={formData.name}
              password={formData.password}
              isPasswordError={isPasswordError}
              count={count}
              handleSubmit={handleSubmit}
              handleChange={handleChangeFormData}/>
  )
}

export default FormPageContainer;
