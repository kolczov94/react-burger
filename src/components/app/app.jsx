import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import AppHeader from "../app-header/app-header";

import styles from "./app.module.css";
import { getIngredients } from "../../services/actions/ingredients";
import {
  ForgotPasswordPage,
  LoginPage,
  MainPage,
  OrderFeedPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage,
  SingleIngredientPage,
} from "../../pages";
import { ProtectedRouteElement } from "../protected-route-element/protected-route-element";
import { getUser } from "../../services/actions/user";
import ProfileForm from "../profile-form/profile-form";
import Error404Page from "../../pages/error-404-page/error-404-page";
import { ROUTES } from "../../utils/constants";

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationState = location.state;

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={locationState?.backgroundLocation || location}>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route
          path={ROUTES.SINGLE_INGREDIENT}
          element={<SingleIngredientPage />}
        />
        <Route path={ROUTES.ORDER_FEED} element={<OrderFeedPage />} />
        <Route
          path={ROUTES.LOGIN}
          element={
            <ProtectedRouteElement element={<LoginPage />} isAuthed={true} />
          }
        />
        <Route
          path={ROUTES.REGISTER}
          element={
            <ProtectedRouteElement element={<RegisterPage />} isAuthed={true} />
          }
        />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={
            <ProtectedRouteElement
              element={<ForgotPasswordPage />}
              isAuthed={true}
            />
          }
        />
        <Route
          path={ROUTES.RESET_PASSWORD}
          element={
            <ProtectedRouteElement
              element={<ResetPasswordPage />}
              isAuthed={true}
            />
          }
        />
        <Route
          path={ROUTES.PROFILE}
          element={
            <ProtectedRouteElement element={<ProfilePage />} isAuthed={false} />
          }
        >
          <Route index element={<ProfileForm />} />
          <Route path={ROUTES.ORDERS} element={<></>} />
        </Route>
        <Route path={ROUTES.ALL} element={<Error404Page />} />
      </Routes>

      {locationState?.backgroundLocation && (
        <Routes>
          <Route
            path={ROUTES.SINGLE_INGREDIENT}
            element={<SingleIngredientPage />}
          />
        </Routes>
      )}
    </div>
  );
}
