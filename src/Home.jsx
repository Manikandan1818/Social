import React from "react";
import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? <Feed posts={posts} /> : "No posts to display"}
    </main>
  );
};

export default Home;
