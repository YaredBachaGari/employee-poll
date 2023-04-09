import { useSelector } from "react-redux";

const useAuth = ({ children }) => {
  const AuthUser = useSelector((state) => state.AuthUser);
  return AuthUser;
};

export default useAuth;
