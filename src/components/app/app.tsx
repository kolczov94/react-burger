import { FC, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
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
import Modal from "../modal/modal";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import ProfileForm from "../profile-form/profile-form";
import Error404Page from "../../pages/error-404-page/error-404-page";

import { ROUTES } from "../../utils/constants";

import { useDispatch } from "../../services/store";
import { getUserThunk } from "../../services/actions/user";
import { getIngredientsThunk } from "../../services/actions/ingredients";

const App: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state;

  useEffect(() => {
    dispatch(getIngredientsThunk());
    dispatch(getUserThunk());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={locationState?.backgroundLocation || location}>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route
          path={ROUTES.SINGLE_INGREDIENT}
          element={<SingleIngredientPage showHeader={true} />}
        />
        <Route path={ROUTES.FEED} element={<OrderFeedPage />} />
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
          <Route path={ROUTES.FEED} element={<></>} />
        </Route>
        <Route path={ROUTES.ALL} element={<Error404Page />} />
      </Routes>

      {locationState?.backgroundLocation && (
        <Routes>
          <Route
            path={ROUTES.SINGLE_INGREDIENT}
            element={
              <Modal title="Детали ингредиента" onClose={() => navigate("/")}>
                <SingleIngredientPage showHeader={false} />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
