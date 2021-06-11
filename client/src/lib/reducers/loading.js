const loading = (state = false, action) => {
  switch (action.type) {
    case "COMMENTS_REQUESTED": {
      return true;
    }
    case "COMMENTS_RECEIVED_SUCCESS": {
      return false;
    }
  }
};
