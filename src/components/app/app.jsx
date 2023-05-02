import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/order-feed" element={<OrderFeedPage />} />
        <Route path="/ingredients/:id" element={<SingleIngredientPage />} />
      </Routes>
    </div>
  );
}

export default App;
