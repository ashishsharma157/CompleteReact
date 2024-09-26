import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../component/Modal";
import { Link } from "react-router-dom";

function NewPost({ onAddPost }) {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  function bodyChangeHandler(event) {
    setBody(event.target.value);
  }
  function autherChangeHandler(event) {
    setAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: body,
      author: author,
    };
    console.log(postData);
    onAddPost(postData);
    onCancel;
  }

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={autherChangeHandler} />
      </p>
      <p className={classes.actions}>
        <Link to='..' type="button">
          Cancel
        </Link>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;
