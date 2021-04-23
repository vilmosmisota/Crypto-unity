import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import _ from "lodash";
import { getMarketData } from "../../redux/actions/MarketDataActions";

import "./feedMarket.css";

const FeedMarket = () => {
  const dispatch = useDispatch();
  const market = useSelector((state) => state.MarketData);

  useEffect(() => {
    dispatch(getMarketData());
  }, [dispatch]);

  console.log(market.data);

  return (
    <div>
      <h1>Market</h1>
    </div>
  );
};

export default FeedMarket;
