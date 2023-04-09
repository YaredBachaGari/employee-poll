import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  const AuthUser = useSelector((state) => state.AuthUser);

  const location = useLocation();
  if (AuthUser?.loggedInUser?.id) {
    return children;
  } else {
    localStorage.setItem("redirectPath", location.pathname);
    return <Navigate to="/" replace />;
  }
};

export default RequireAuth;
