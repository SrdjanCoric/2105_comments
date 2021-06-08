import React, { useEffect, useState } from "react";
import AddCommentForm from "./AddCommentForm";
import Comments from "./Comments";
import data from "../lib/comments";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data);
  }, []);

  return (
    <div>
      <Comments comments={comments} />
      <AddCommentForm />
    </div>
  );
}

export default App;
