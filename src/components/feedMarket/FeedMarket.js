import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { getMarketData } from "../../redux/actions/MarketDataActions";

import "./feedMarket.css";

const FeedMarket = () => {
  const dispatch = useDispatch();
  const market = useSelector((state) => state.MarketData);
  console.log(market.data);

  useEffect(() => {
    dispatch(getMarketData());
  }, [dispatch]);

  const ShowData = () => {
    if (!_.isEmpty(market.data)) {
      return market.data.map((el) => {
        return (
          <div className="market-data-container" key={el.id}>
            <p className="coin-name">{el.name}</p>
            <p>£{el.current_price.toFixed(2)}</p>
            {el.price_change_percentage_24h < 0 ? (
              <p className="price-change-red">
                {el.price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className="price-change-green">
                {el.price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
            {el.price_change_percentage_7d_in_currency < 0 ? (
              <p className="price-change-red">
                {el.price_change_percentage_7d_in_currency.toFixed(2)}%
              </p>
            ) : (
              <p className="price-change-green">
                {el.price_change_percentage_7d_in_currency.toFixed(2)}%
              </p>
            )}
          </div>
        );
      });
    }
    if (market.loading) {
      return <p>Loading...</p>;
    }

    if (market.errorMsg !== "") {
      return <p>{market.errorMsg}</p>;
    }

    return <p>No data</p>;
  };

  return (
    <div>
      <section className="feed-market-container">
        <div className="feed-market-header">
          <h1>Cryptocurrencies on the market</h1>
          <h2>Top 50 ranked by market value </h2>
        </div>
        <div className="coins-name-container">
          <div className="coins-name">
            <p>Name</p>
          </div>
          <div className="coins-price">
            <p>Price</p>
          </div>
          <div className="coins-24h">
            <p>24h</p>
          </div>
          <div className="coins-mkp-cap">
            <p>7d</p>
          </div>
        </div>
        <ShowData />
      </section>
    </div>
  );
};

export default FeedMarket;
