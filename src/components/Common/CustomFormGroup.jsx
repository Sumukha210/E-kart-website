import React from "react";
import FormControl from "react-bootstrap/FormControl";
import { useSelector } from "react-redux";
import {
  nameProps,
  emailProps,
  passwordProps,
} from "../Common/InputValidationProps";

const FormInputGroup = ({ name, placeholder, register, errors, ...props }) => {
  const authError = useSelector(({ AuthReducer: { error } }) => error);

  console.log(authError);

  const propType = () => {
    if (name === "name") {
      return nameProps;
    } else if (name === "password") {
      return passwordProps;
    } else {
      return emailProps;
    }
  };

  return (
    <>
      <label htmlFor="name">{name} :-</label>
      <br />

      <FormControl
        ref={register(propType())}
        name={name}
        {...props}
        placeholder={placeholder}
        id={name}
      />

      {errors[name] && <h6 className="error">{errors[name].message}</h6>}

      {authError[name] && <h6 className="error">{authError[name]}</h6>}
    </>
  );
};

export default FormInputGroup;
