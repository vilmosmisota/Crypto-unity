import { combineReducers } from "redux";
import MarketDataReducer from "./MarketDataReducer";

const RootReducer = combineReducers({
  MarketData: MarketDataReducer,
});

export default RootReducer;
