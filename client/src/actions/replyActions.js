import * as types from "../constants/ActionTypes";

export const repliesReceivedSuccess = (replies) => {
  return { type: types.REPLIES_RECEIVED, payload: { replies } };
};
