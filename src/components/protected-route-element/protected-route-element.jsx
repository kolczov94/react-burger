import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectorUser,
  selectorUserRequest,
} from "../../services/selectors/user";

export function ProtectedRouteElement({ element, isAuthed }) {
  const location = useLocation();
  const loactionState = location.state;

  const userRequest = useSelector(selectorUserRequest);
  const user = useSelector(selectorUser);

  if (userRequest) {
    return null;
  }

  if (isAuthed && !user) {
    return element;
  }

  if (isAuthed && user) {
    return loactionState?.from ? (
      <Navigate to={loactionState.from} replace />
    ) : (
      <Navigate to="/" replace />
    );
  }

  return user ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
