import React from "react";
import Post from "./Post";
export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "jordanabram1997",
      userImage:
        "https://pbs.twimg.com/profile_images/1522632973299994624/1ZmP8O38_400x400.jpg",
      image:
        "https://images.unsplash.com/photo-1657307386333-119df5ebb8f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      caption: "Nice picture!",
    },
    {
      id: "2",
      username: "ItsTheKarmaah",
      userImage:
        "https://pbs.twimg.com/profile_images/1522632973299994624/1ZmP8O38_400x400.jpg",
      image:
        "https://images.unsplash.com/photo-1657318860378-54cbc9420923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      caption: "Nice view where i am",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          image={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
