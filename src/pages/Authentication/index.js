import React, { useEffect, Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputItem from "../../components/InputItem";
import { loginUser, spinnerState } from "./actions";

import decathlon from "../../assets/decathlon.png";
import { users_list } from "../../utils/ExistingUsers";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

function Authentication(props) {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const dispatch = useDispatch();
  const authenticationReducer = useSelector(
    (state) => state?.authenticateReducer
  );
  const history = useHistory();
  useEffect(() => {
    if (authenticationReducer?.logged_in) {
      history.push("/");
    }
  }, [authenticationReducer, history]);

  const handleInputChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassord(event.target.value);
    }
  };

  const onSubmitUserDetails = () => {
    const payload = {
      email: email,
      password: password,
    };
    let findIndex = users_list.findIndex(
      (user) =>
        user.email === payload.email && user.password === payload.password
    );
    if (findIndex !== -1) {
      toastMessage("success", `User logged in successfully.`);
      dispatch(spinnerState(true));
      setTimeout(() => {
        dispatch(spinnerState(false));
        dispatch(loginUser(payload));
      }, 1000);
    } else {
      toastMessage("error", "Please enter correct email and password.");
    }
  };

  const toastMessage = (toastType, message) => {
    toast[toastType](message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="LoginContainer">
      <Grid item={true} xs={7} className="firstGrid">
        <div className="heading">Welcome to DECATHLON</div>
      </Grid>
      <Grid item={true} xs={5} className="secondGrid">
        <div>
          <img alt="not found" src={decathlon} className="img-wrapper" />
        </div>
        <div className="container">
          <Fragment>
            <InputItem
              label="Email"
              placeholder="Enter your email"
              name="email"
              // value={values.email}
              onChange={handleInputChange}
            />
            <InputItem
              type="password"
              label="Password"
              placeholder="Enter your password"
              name="password"
              // value={values.password}
              onChange={handleInputChange}
            />
            {/* <div className="error">{showMessage.error}</div> */}
            <Button
              type="submit"
              variant="contained"
              className="submitButton"
              fullWidth
              onClick={onSubmitUserDetails}
            >
              Login
            </Button>
          </Fragment>
        </div>
      </Grid>
    </div>
  );
}

export default Authentication;
