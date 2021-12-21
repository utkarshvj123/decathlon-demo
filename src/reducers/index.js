import { combineReducers } from "redux";

import cartReducer from "../pages/Cart/cartReducer";
import authenticateReducer from "../pages/Authentication/authenticateReducer";

const rootReducer = combineReducers({
  cartReducer,
  authenticateReducer,
});

export default rootReducer;
