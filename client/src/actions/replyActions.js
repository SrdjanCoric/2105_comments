import * as types from "../constants/ActionTypes";
import apiClient from "../lib/ApiClient";

export const repliesReceivedSuccess = (replies) => {
  return { type: types.REPLIES_RECEIVED, payload: { replies } };
};

export const repliesReceived = (id) => {
  return function (dispatch) {
    apiClient.getReplies(id, (replies) => {
      dispatch(repliesReceivedSuccess(replies));
    });
  };
};
