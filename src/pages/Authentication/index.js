import React, { useEffect, Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import InputItem from "../../components/InputItem";
import { loginUser } from "./actions";

import decathlon from "../../assets/decathlon.png";
import { users_list } from "../../utils/ExistingUsers";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Authentication(props) {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [showMessage, setShowMessage] = useState({
    success: true,
    message: "User logged in successfully",
    error: "",
  });
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
      setShowMessage({
        success: "success",
        message: "User logged in successfully",
        error: "",
      });
      setSnackOpen(true);
      dispatch(loginUser(payload));
    } else {
      setShowMessage({
        success: "error",
        message: `User doesn't exist`,
        error: "Please enter correct email and password",
      });
      setSnackOpen(true);
    }
  };

  const handleSnackClose = (event, reason) => {
    setSnackOpen(false);
  };

  return (
    <div className="LoginContainer">
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleSnackClose}
      >
        {showMessage.message !== "" && (
          <Alert onClose={handleSnackClose} severity={showMessage.success}>
            {showMessage.message}
          </Alert>
        )}
      </Snackbar>
      <Grid item={true} xs={7} className="firstGrid">
        <div className="heading">Welcome to DECATHLON</div>
      </Grid>
      <Grid item={true} xs={5} className="secondGrid">
        <img alt="not found" src={decathlon} height={100} />
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
            <div className="error">{showMessage.error}</div>
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
