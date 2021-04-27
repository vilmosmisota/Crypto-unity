import React from "react";
import FeedSubredditComment from "../../components/feedSubredditComment/FeedSubredditComment";
import FeedSubredditPost from "../../components/feedSubredditPost/FeedSubredditPost";

const RedditPostPage = () => {
  return (
    <div>
      <FeedSubredditPost />
      <FeedSubredditComment />
    </div>
  );
};

export default RedditPostPage;
