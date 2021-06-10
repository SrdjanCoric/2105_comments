import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { commentsReceivedSuccess } from "../actions/commentActions";
import CommentThread from "./CommentThread";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  useEffect(() => {
    axios
      .get("/api/comments")
      .then((response) => response.data)
      .then((data) => {
        dispatch(commentsReceivedSuccess(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="comments">
      <h2>Comments (2)</h2>
      {comments.map((comment) => {
        return <CommentThread key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
