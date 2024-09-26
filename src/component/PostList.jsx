import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  // function handlerPost(event)
  // {

  // }

  function addPostHandler(postData) {
    setPosts((existingPost) => [postData, ...existingPost]);
    console.log(posts);
    //setPosts(postData,...posts);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post, index) => (
          <Post key={index} author={post.author} body={post.body} />
        ))}
        {/* <Post author="Ashish" body="At least i learned basic React" />
        <Post author="Ashish Sharma" body="React is awesome!!" /> */}
      </ul>
    </>
  );
}

export default PostList;
