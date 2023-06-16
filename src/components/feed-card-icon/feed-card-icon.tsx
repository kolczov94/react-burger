import { FC, CSSProperties } from "react";
import styles from "./feed-card-icon.module.css";

type TFeedCardIconProps = {
  type: "primary" | "secondary";
  image: string;
  count?: number;
  customStyles?: CSSProperties;
};

const FeedCardIcon: FC<TFeedCardIconProps> = ({
  image,
  type,
  count,
  customStyles,
}) => {
  return (
    <div className={styles.wrapper} style={customStyles}>
      <div className={styles.icon}>
        {type === "secondary" && (
          <span
            className={`${styles.count} text text_type_main-medium text_color_primary`}
          >
            +{count}
          </span>
        )}
        <img
          className={type === "secondary" ? styles.imageSecond : styles.image}
          src={image}
          alt="icon ingredient"
        />
      </div>
    </div>
  );
};

export default FeedCardIcon;
