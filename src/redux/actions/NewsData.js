import axios from "axios";
import getPastDate from "../../helpers/getPastDate";
import { NEWS_DATA_LOADING, NEWS_DATA_SUCCESS, NEWS_DATA_FAIL } from "./types";

require("dotenv").config();

export const getNewsData = () => async (dispatch) => {
  try {
    dispatch({
      type: NEWS_DATA_LOADING,
    });

    const apiKey = process.env.REACT_APP_API_KEY;
    const date = getPastDate();

    const redditApi = `https://newsapi.org/v2/everything?q=cryptocurrency&from=${date}&sortBy=relevancy&language=en&apiKey=${apiKey}`;
    const res = await axios.get(redditApi);

    dispatch({
      type: NEWS_DATA_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: NEWS_DATA_FAIL,
    });
  }
};
