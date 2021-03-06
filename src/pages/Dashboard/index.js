import React, { useEffect } from "react";
import { fetchProductsList, addProductsToCart } from "../Cart/actions";
import { logoutUser } from "../Authentication/actions";
import AppBarHeader from "../../components/AppBar";
import ProductCard from "./Components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

// import {tshirts,shorts,shoes,pants,bag,snorkelingmask,camp} from '../../assets'
import "./style.scss";

function Dashboard(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartReducer = useSelector((state) => state.cartReducer);

  const authenticationReducer = useSelector(
    (state) => state.authenticationReducer || {}
  );

  useEffect(() => {
    dispatch(fetchProductsList(dispatch));
  }, [dispatch]);
  const dispatchActionAccouringToReque = (type, product) => {
    if (cartReducer.products_in_cart.some((prod) => prod._id === product._id)) {
      toastMessage("error", "Product already in cart.");
    } else {
      toastMessage("success", `${product.name} added successfully.`);
      dispatch(addProductsToCart(product));
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
    <div className="dashboardContainer">
      <AppBarHeader
        history={history}
        productsData={cartReducer}
        authenticationReducer={authenticationReducer}
        logoutUser={() => logoutUser()}
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
