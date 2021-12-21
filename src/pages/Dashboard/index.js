import React, { useEffect } from "react";
import { fetchProductsList, addProductsToCart } from "../Cart/actions";
import { logoutUser } from "../Authentication/actions";
import AppBarHeader from "../../components/AppBar";
import ProductCard from "./Components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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

  return (
    <div className="dashboardContainer">
      <AppBarHeader
        history={history}
        productsData={cartReducer}
        authenticationReducer={authenticationReducer}
        logoutUser={() => dispatch(logoutUser())}
      />
      <div className="productList">
        {cartReducer.products_list.map((product) => {
          return (
            <ProductCard
              key={product?._id}
              product={product}
              addProductsToCart={() => dispatch(addProductsToCart())}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
