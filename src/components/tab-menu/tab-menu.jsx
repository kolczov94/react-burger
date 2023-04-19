import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentTab } from "../../services/actions/ingredients";
import { TAB_MENU_LIST } from "../../utils/constants";

export default function TabMenu() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.ingredients.currentTab);
  return (
    <>
      {TAB_MENU_LIST.map((tab, count) => {
        return (
          <Tab
            key={count}
            value={tab.name}
            active={currentTab === tab.name}
            onClick={(name) => dispatch(updateCurrentTab(name))}
          >
            {tab.title}
          </Tab>
        );
      })}
    </>
  );
}
