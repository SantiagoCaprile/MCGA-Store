import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "../store/products/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  // users: usersReducer,
});

export default rootReducer;
