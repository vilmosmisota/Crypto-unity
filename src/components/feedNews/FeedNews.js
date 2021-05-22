import React, { useEffect, Fragment } from "react";
import "./feedNews.css";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../redux/actions/NewsData";
import { v4 as uuidv4 } from "uuid";
import LoaderIcon from "../loaderIcon/LoaderIcon";

const FeedNews = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.NewsData);

  console.log(news);
  console.log(process.env);

  // const page = {
  //   bitcoin: "bitcoin",
  // };

  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);

  const ShowData = () => {
    if (!_.isEmpty(news.data.articles)) {
      return news.data.articles.map((el) => {
        return (
          <Fragment>
            <a href={el.url} target="_blank" rel="noopener noreferrer">
              <article className="show-posts-container" key={uuidv4()}>
                <h2>{el.title}</h2>
                <div className="posts-img-container">
                  <img src={el.urlToImage} alt="" className="posts-img" />
                </div>
                <div className="post-selftext">
                  <p>{el.content}</p>
                </div>
              </article>
            </a>
          </Fragment>
        );
      });
    }

    if (news.loading) {
      return <LoaderIcon />;
    }

    if (news.errorMsg !== "") {
      return <p>{news.errorMsg}</p>;
    }

    return (
      <div className="empty-data-container">
        <p>No Data</p>
      </div>
    );
  };

  return (
    <div>
      <ShowData />
    </div>
  );
};

export default FeedNews;
