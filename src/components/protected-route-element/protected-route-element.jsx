import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorUser,
  selectorUserRequest,
} from "../../services/selectors/user";
import { getUser } from "../../services/actions/user";

export function ProtectedRouteElement({ element }) {
  const dispatch = useDispatch();
  const userRequest = useSelector(selectorUserRequest);
  const user = useSelector(selectorUser);
  const location = useLocation();

  useEffect(() => {
    console.log("PROTECTED");
  }, []);

  useLayoutEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (userRequest) {
    return null;
  }
  console.log(user, userRequest);

  return user ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
