import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import Stories from "react-insta-stories";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "mkbhd",
      postImage: require("./1mkbhd.jpg"),
      likes: 187000,
      timestamp: "1d",
    },
    {
      user: "virat.kohli",
      postImage: require("./3vk.jpg"),
      likes: 798133654,
      timestamp: "2d",
    },
    {
      user: "actorsuriya",
      postImage: require("./2suriya.jpg"),
      likes: 432000,
      timestamp: "2d",
    },
    {
      user: "ikamalhassan",
      postImage: require("./4kamal.jpg"),
      likes: 940000,
      timestamp: "3d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        {/* <Stories
          stories={stories}
          defaultInterval={1500}
          width={432}
          height={768}
        /> */}
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
