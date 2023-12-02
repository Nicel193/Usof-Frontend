import { useDispatch, useSelector } from "react-redux";

export function useAuth() {
  const userData = useSelector((state) => state.auth.userData);

  return {
    isAuth: !!userData,
    userData: userData,
  };
}
