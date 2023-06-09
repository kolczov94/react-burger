import { FC, ReactElement } from "react";
import { useSelector } from "../../services/store";
import { Navigate, useLocation } from "react-router-dom";

import {
  selectorUser,
  selectorUserRequest,
} from "../../services/selectors/user";

type IProtectedRouteElementProps = {
  element: ReactElement;
  isAuthed?: boolean;
};

const ProtectedRouteElement: FC<IProtectedRouteElementProps> = ({
  element,
  isAuthed,
}) => {
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
};

export default ProtectedRouteElement;
