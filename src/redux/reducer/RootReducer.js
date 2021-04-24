import { combineReducers } from "redux";
import MarketDataReducer from "./MarketDataReducer";
import RedditDataReducer from "./RedditDataReducer";

const RootReducer = combineReducers({
  MarketData: MarketDataReducer,
  RedditData: RedditDataReducer,
});

export default RootReducer;
