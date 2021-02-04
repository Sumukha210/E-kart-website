import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormGroup from "react-bootstrap/FormGroup";
import CustomFormGroup from "../Common/CustomFormGroup";
import {
  login__Api,
  logout__Fun,
  setAuthError__Fun,
  signup__Api,
} from "../../Redux/Actions/AuthAction";
import ButtonLoading from "../Common/ButtonLoading";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();

  const authError = useSelector(({ AuthReducer: { error } }) => error);
  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);
  const authLoading = useSelector(({ AuthReducer: { loading } }) => loading);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data, e) => {
    if (isSignUp) {
      dispatch(signup__Api(data));
    } else {
      dispatch(login__Api(data));
    }
  };

  const handleSwitchMode = () => {
    setIsSignUp(prev => !prev);
    authError && dispatch(setAuthError__Fun());
  };

  useEffect(() => {
    reset();
    isAuth.isAllowed && history.push("/");
    if (authError.message || authError.email) {
      logout__Fun();
    }
  }, [isSignUp, isAuth.isAllowed, authError.message, authError.email]);

  return (
    <>
      <Container className="authForm">
        <Row className="align-items-center justify-content-center">
          <Col sm={12} md={10} lg={7}>
            <div className="container">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {isSignUp && (
                  <FormGroup className="my-3">
                    <CustomFormGroup
                      type="text"
                      register={register}
                      placeholder="myName kumar"
                      name="name"
                      errors={errors}
                    />
                  </FormGroup>
                )}

                <FormGroup className="my-3">
                  <CustomFormGroup
                    type="text"
                    name="email"
                    register={register}
                    placeholder="myname@gmail.com"
                    errors={errors}
                  />
                </FormGroup>

                <FormGroup className="my-3">
                  <CustomFormGroup
                    type="password"
                    name="password"
                    register={register}
                    placeholder="kingandqueen1@"
                    errors={errors}
                  />
                </FormGroup>

                {authError.message && (
                  <h6 className="error">{authError.message}</h6>
                )}

                <FormGroup className="mt-2">
                  <ButtonLoading
                    disabled={authLoading ? true : false}
                    type="submit"
                    isLoading={authLoading}
                    className="btn d-block w-100"
                    text={isSignUp ? "signup" : "login"}
                  />
                </FormGroup>
              </form>

              <div className="extra">
                <h6 className="extra__message">
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account?"}
                  <span onClick={handleSwitchMode}>
                    Click here to {isSignUp ? "SignUp" : "Login"}{" "}
                  </span>
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AuthForm;
