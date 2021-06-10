import * as types from "../constants/ActionTypes";

export const commentsReceivedSuccess = (comments) => {
  return { type: types.COMMENTS_RECEIVED, payload: { comments } };
};
export const commentAddedSuccess = (comment) => {
  return { type: types.COMMENT_ADDED, payload: { comment } };
};
