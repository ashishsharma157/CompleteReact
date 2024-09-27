import { useLoaderData } from "react-router-dom";
import Post from "./Post";

import classes from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();
  //const [posts, setPosts] = useState([]);
  //const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   async function fetchPost() {
  //     setIsFetching(true);
  //     // const response = await fetch("http://localhost:8080/posts");
  //     // const resData = await response.json();
  //     setPosts(resData.posts);
  //     console.log(resData);
  //     setIsFetching(false);
  //   }
  //   fetchPost();
  // }, []);

  // function addPostHandler(postData) {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((existingPost) => [postData, ...existingPost]);
  // }

  return (
    <>
      <ul className={classes.posts}>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
      </ul>
    </>
  );
}

export default PostList;
