import { combineReducers } from "redux";
import MarketDataReducer from "./MarketDataReducer";
import RedditDataReducer from "./RedditDataReducer";
import RedditPostDataReducer from "./RedditPostDataReducer";

const RootReducer = combineReducers({
  MarketData: MarketDataReducer,
  RedditData: RedditDataReducer,
  RedditPostData: RedditPostDataReducer,
});

export default RootReducer;
