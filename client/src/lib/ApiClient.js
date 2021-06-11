import axios from "axios";

const apiClient = {
  getComments: function (callback) {
    return axios
      .get("/api/comments")
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  addComment: function (newComment, callback) {
    return axios
      .post("/api/comments", { ...newComment })
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  getReplies: function (id, callback) {
    axios
      .get(`/api/comment_replies?comment_id=${id}`)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
};

export default apiClient;
