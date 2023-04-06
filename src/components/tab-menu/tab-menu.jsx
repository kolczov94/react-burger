import { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function TabMenu({ tabs, tabDefault }) {
  const [current, setCurrent] = useState(tabDefault);
  return (
    <>
      {tabs.map((tab, count) => {
        return (
          <Tab
            key={count}
            value={tab.name}
            active={current === tab.name}
            onClick={setCurrent}
          >
            {tab.title}
          </Tab>
        );
      })}
    </>
  );
}

TabMenu.propTypes = {
  tabDefault: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
