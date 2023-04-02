import { _getUsers } from "../../_DATA";
export const Fetch_user_request = "Fetch_user_request";
export const Fetch_user_success = "Fetch_user_success";
export const Fetch_user_failed = "Fetch_user_failed";

export const FetchAllUsersrequest = (Users) => {
  return {
    type: Fetch_user_request,
  };
};
export const FetchAllUsersSuccessfully = (Users) => {
  return {
    type: Fetch_user_success,
    payload: Users,
  };
};
export const FetchAllUsersFailed = (error) => {
  return {
    type: Fetch_user_success,
    payload: error,
  };
};

export const handleUserFetch = () => {
  return (dispatch) => {
    dispatch(FetchAllUsersrequest());
    return _getUsers()
      .then((resp) => {
        dispatch(FetchAllUsersSuccessfully(resp));
      })
      .catch((error) => {
        dispatch(FetchAllUsersFailed(error.message));
      });
  };
};
