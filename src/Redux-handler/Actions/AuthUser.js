export const user_authentication_request = "user_authentication_request";
export const user_authentication_success = "user_authentication_success";
export const user_authentication_failed = "user_authentication_failed";
export const logout_user = "logout_user";

export const AuthenticateUserRequest = () => {
  return {
    type: user_authentication_request,
  };
};
export const AuthenticateUserSuccess = (user) => {
  return {
    type: user_authentication_success,
    user,
  };
};
export const AuthenticateUserFailed = () => {
  return {
    type: user_authentication_failed,
  };
};
export const logoutUser = () => ({
  type: logout_user,
});

export const handleLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("redirectPath");
    dispatch(logoutUser());
    window.location.reload();
  };
};
