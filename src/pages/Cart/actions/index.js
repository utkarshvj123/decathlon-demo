import {
  FETCH_PRODUCTS_LIST,
  ADD_TO_CART,
  DELETE_FROM_CART,
  SET_QUANTITY,
  EMPTY_CART,
} from "./actionType";

export const fetchProductsList = (payload) => {
  return {
    type: `${FETCH_PRODUCTS_LIST}_SUCCESS`,
  };
};

export const fetchProductsListSuccess = (payload) => ({
  type: `${FETCH_PRODUCTS_LIST}_SUCCESS`,
  payload,
});

export const fetchProductsListFailed = (payload) => ({
  type: `${FETCH_PRODUCTS_LIST}_FAILED`,
  payload,
});

export const addProductsToCart = (payload) => ({
  type: `${ADD_TO_CART}`,
  payload,
});
export const deleteProductFromCart = (payload) => ({
  type: `${DELETE_FROM_CART}`,
  payload,
});
export const setQuantity = (payload) => ({
  type: `${SET_QUANTITY}`,
  payload,
});
export const emptyCart = (payload) => ({
  type: `${EMPTY_CART}`,
  payload,
});
