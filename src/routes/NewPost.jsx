import classes from "./NewPost.module.css";
import Modal from "../component/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost({ onAddPost }) {

  // function bodyChangeHandler(event) {
  //   setBody(event.target.value);
  // }
  // function autherChangeHandler(event) {
  //   setAuthor(event.target.value);
  // }
  // function submitHandler(event) {
  //   event.preventDefault();
  //   const postData = {
  //     body: body,
  //     author: author,
  //   };
  //   console.log(postData);
  //   onAddPost(postData);

  // }

  return (
    <Modal>
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="author" required />
      </p>
      <p className={classes.actions}>
        <Link to='..' type="button">
          Cancel
        </Link>
        <button>Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}){

      const formData=await request.formData();
      const postData=Object.fromEntries(formData);
      await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return redirect('/');
}