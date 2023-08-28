import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="Post">
      <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetaaaime}</p>
      </Link>

      <p className="apostBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
