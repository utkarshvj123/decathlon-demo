import React from "react";
import Button from "@material-ui/core/Button";
import confirm from "../../assets/confirm.jpeg";
import "./style.scss";
import { useHistory } from "react-router";

function OrderConfirmation() {
  const history = useHistory();
  const goToHomePage = () => {
    history.push("/");
  };
  return (
    <div className="OrderConfirmationContainer">
      <img alt="not found" src={confirm} />
      <div className="text">Order Confirmed</div>
      <Button
        type="submit"
        variant="contained"
        className="submitButton"
        fullWidth
        color="primary"
        onClick={goToHomePage}
      >
        Go to Home Page
      </Button>
    </div>
  );
}

export default OrderConfirmation;
