import MainHeader from "./component/MainHeader";
import PostList from "./component/PostList";
import { useState } from "react";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  function showHandleModal() {
    setModalVisible(true);
  }
  function hideHandleModal() {
    setModalVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showHandleModal} />
      <main>
        <h1>Hello World</h1>
        <PostList isPosting={modalVisible} onStopPosting={hideHandleModal} />
      </main>
    </>
  );
}

export default App;
