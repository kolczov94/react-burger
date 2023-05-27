import styles from "./profile-page.module.css";
import ProfileMenu from "../../components/profile-menu/profile-menu";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <main className={`${styles.main} pl-5 pr-5 pb-10`}>
      <div className={`${styles.columns} mt-30`}>
        <div className="mr-15">
          <ProfileMenu />
          <div className="mt-20">
            <p
              className={`${styles.description} text text_type_main-default text_color_inactive`}
            >
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </div>
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default ProfilePage;
