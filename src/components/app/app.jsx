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
        <Route path="/" element={<MainPage />} />
        <Route path="/ingredients/:id" element={<SingleIngredientPage />} />
        <Route path="/order-feed" element={<OrderFeedPage />} />
        <Route
          path="/login"
          element={
            <ProtectedRouteElement element={<LoginPage />} isAuthed={true} />
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRouteElement element={<RegisterPage />} isAuthed={true} />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRouteElement
              element={<ForgotPasswordPage />}
              isAuthed={true}
            />
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRouteElement
              element={<ResetPasswordPage />}
              isAuthed={true}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRouteElement element={<ProfilePage />} isAuthed={false} />
          }
        >
          <Route index element={<ProfileForm />} />
          <Route path="orders" element={<></>} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>

      {locationState?.backgroundLocation && (
        <Routes>
          <Route path="/ingredients/:id" element={<SingleIngredientPage />} />
        </Routes>
      )}
    </div>
  );
}
