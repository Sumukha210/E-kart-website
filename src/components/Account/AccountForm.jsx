import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";
import CustomFormGroup from "../Common/CustomFormGroup";
import ButtonLoading from "../Common/ButtonLoading";
import {
  setAuthError__Fun,
  updateAccount__Api,
} from "../../Redux/Actions/AuthAction";

const AccountForm = () => {
  const [closeBtn, setCloseBtn] = useState(false);
  const authError = useSelector(({ AuthReducer: { error } }) => error);
  const { register, handleSubmit, errors, reset } = useForm();
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);
  const AuthError = useSelector(({ AuthReducer: { error } }) => error);

  const authLoading = useSelector(({ AuthReducer: { loading } }) => loading);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitBtn = () => {
    setCloseBtn(true);
  };

  const handleCloseBtn = () => {
    reset();
    setCloseBtn(false);
  };

  const onSubmit = (data, e) => {
    setCloseBtn(false);
    if (data.password != data["confirm password"]) {
      setConfirmPasswordError("password and cofirm password are different");
    } else {
      setConfirmPasswordError("");
      const { name, email, password } = data;
      dispatch(updateAccount__Api({ name, email, password }));
    }
  };

  useEffect(() => {
    AuthError && dispatch(setAuthError__Fun());
  }, []);

  return (
    <>
      <div className="accountForm mb-3">
        <div className="d-flex justify-content-between">
          <h6 className="accountForm__title">Account:-</h6>
          {closeBtn && (
            <button
              className="btn btn-danger font-weight-bold"
              onClick={handleCloseBtn}>
              X
            </button>
          )}
        </div>

        <Row>
          <Col>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <FormGroup className="my-3">
                <CustomFormGroup
                  type="text"
                  register={register}
                  placeholder="myName kumar"
                  name="name"
                  errors={errors}
                />
              </FormGroup>

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
                  placeholder="namaste1@"
                  errors={errors}
                />
              </FormGroup>

              <FormGroup className="my-3">
                <CustomFormGroup
                  type="password"
                  name="confirm password"
                  register={register}
                  placeholder="namaste1@"
                  errors={errors}
                />
              </FormGroup>

              {authError.message && (
                <h6 className="error">{authError.message}</h6>
              )}

              {confirmPasswordError && (
                <h6 className="error">{confirmPasswordError}</h6>
              )}

              <FormGroup className="mt-2">
                <ButtonLoading
                  onClick={handleSubmitBtn}
                  disabled={authLoading ? true : false}
                  type="submit"
                  isLoading={authLoading}
                  className="btn d-block w-100"
                  text="Update"
                />
              </FormGroup>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AccountForm;
