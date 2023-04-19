import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { TAB_MENU_LIST } from "../../utils/constants";

export default function TabMenu({ scrollToTarget }) {
  const currentTab = useSelector((state) => state.ingredients.currentTab);

  return (
    <>
      {TAB_MENU_LIST.map((tab, count) => {
        return (
          <Tab
            key={count}
            value={tab.name}
            active={currentTab === tab.name}
            onClick={(value) => scrollToTarget(value)}
          >
            {tab.title}
          </Tab>
        );
      })}
    </>
  );
}

TabMenu.propTypes = {
  scrollToTarget: PropTypes.func.isRequired,
};
