import { FC } from "react";
import { useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { TAB_MENU_LIST } from "../../utils/constants";
import { selectorCurrentTab } from "../../services/selectors/ingredients";
import { TScrollToTarget } from "../../hooks/use-observer";

type ITabMenuProps = {
  scrollToTarget: TScrollToTarget;
};

const TabMenu: FC<ITabMenuProps> = ({ scrollToTarget }) => {
  const currentTab = useSelector(selectorCurrentTab);

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
};

export default TabMenu;
