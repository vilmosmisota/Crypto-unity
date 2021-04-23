import axios from "axios";

import {
  MARKET_DATA_LOADING,
  MARKET_DATA_SUCCESS,
  MARKET_DATA_FAIL,
} from "./types";

export const getMarketData = () => async (dispatch) => {
  try {
    dispatch({
      type: MARKET_DATA_LOADING,
    });

    const newLocal = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=20&page=1&sparkline=false`;
    const res = await axios.get(newLocal);

    dispatch({
      type: MARKET_DATA_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: MARKET_DATA_FAIL,
    });
  }
};
