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

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationState = location.state;

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={locationState?.backgroundLocation || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/ingredients/:id" element={<SingleIngredientPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<ProfilePage />} />}
        />
        <Route
          path="/order-feed"
          element={<ProtectedRouteElement element={<OrderFeedPage />} />}
        />
      </Routes>

      {locationState?.backgroundLocation && (
        <Routes>
          <Route path="/ingredients/:id" element={<SingleIngredientPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
