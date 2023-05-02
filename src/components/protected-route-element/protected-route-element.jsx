import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorUser,
  selectorUserRequest,
} from "../../services/selectors/user";
import { getUser } from "../../services/actions/user";

export function ProtectedRouteElement({ element }) {
  const dispatch = useDispatch();
  const user = useSelector(selectorUser);
  const userRequest = useSelector(selectorUserRequest);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (userRequest) {
    return null;
  }

  return user ? element : <Navigate to="/login" replace />;
}
