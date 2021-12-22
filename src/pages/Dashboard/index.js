import React, { useEffect } from "react";
import { fetchProductsList, addProductsToCart } from "../Cart/actions";
import { logoutUser } from "../Authentication/actions";
import AppBarHeader from "../../components/AppBar";
import ProductCard from "./Components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

// import {tshirts,shorts,shoes,pants,bag,snorkelingmask,camp} from '../../assets'
import "./style.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Dashboard(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartReducer = useSelector((state) => state.cartReducer);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSnackClose = (event, reason) => {
    setSnackOpen(false);
  };

  const authenticationReducer = useSelector(
    (state) => state.authenticationReducer || {}
  );

  useEffect(() => {
    dispatch(fetchProductsList(dispatch));
  }, [dispatch]);
  const dispatchActionAccouringToReque = (type, product) => {
    if (type === "logout") {
      dispatch(logoutUser());
    } else {
      cartReducer.products_in_cart.some((prod) => prod._id === product._id) ||
        dispatch(addProductsToCart(product));
    }
  };

  return (
    <div className="dashboardContainer">
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleSnackClose}
      >
        {message !== "" && (
          <Alert onClose={handleSnackClose} severity={"failure"}>
            {message}
          </Alert>
        )}
      </Snackbar>

      <AppBarHeader
        history={history}
        productsData={cartReducer}
        authenticationReducer={authenticationReducer}
        logoutUser={() => dispatchActionAccouringToReque("logout")}
      />
      <div className="productList">
        {cartReducer.products_list.map((product) => {
          return (
            <ProductCard
              key={product?._id}
              product={product}
              addProductsToCart={() =>
                dispatchActionAccouringToReque("add", product)
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
