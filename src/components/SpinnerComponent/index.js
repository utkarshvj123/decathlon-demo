import React from "react";
import LoadingOverlay from "react-loading-overlay";
// import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    display: "none" /* Hidden by default */,
    position: "fixed" /* Stay in place */,
    zIndex: "9" /* Sit on top */,
    left: "0",
    top: 0,
    width: "100%" /* Full width */,
    height: "100%" /* Full height */,
    overflow: "auto" /* Enable scroll if needed */,
    backgroundColor: "rgb(0, 0, 0)" /* Fallback color */,
    backgroundColor: "rgba(0, 0, 0, 0.4)" /* Black w/ opacity */,
  },
}));

const SpinnerComponent = () => {
  const classes = useStyles();
  const spinnerState = useSelector(
    (state) => state?.authenticateReducer?.spinnerEnabled
  );
  return (
    <div
      className={classes.grow}
      style={spinnerState ? { display: "block" } : {}}
    >
      <LoadingOverlay
        active={spinnerState}
        spinner
        text="Loading your content..."
        className="spinner-class"
      />
    </div>
  );
};
export default SpinnerComponent;
