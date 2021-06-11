import * as types from "../constants/ActionTypes";
import apiClient from "../lib/ApiClient";

export const commentsReceivedSuccess = (comments) => {
  return { type: types.COMMENTS_RECEIVED, payload: { comments } };
};
export const commentAddedSuccess = (comment) => {
  return { type: types.COMMENT_ADDED, payload: { comment } };
};

export const commentsReceived = () => {
  return function (dispatch) {
    apiClient.getComments((comments) => {
      dispatch(commentsReceivedSuccess(comments));
    });
  };
};

export const commentAdded = (newComment, callback) => {
  return function (dispatch) {
    apiClient.addComment(
      (newComment,
      (commentResponse) => {
        dispatch(commentAddedSuccess(commentResponse));
        if (callback) {
          callback();
        }
      })
    );
  };
};
