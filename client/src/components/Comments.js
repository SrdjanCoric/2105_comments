import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { commentsReceived } from "../actions/commentActions";
import CommentThread from "./CommentThread";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(commentsReceived());
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
