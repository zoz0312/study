import { useState } from "react";

const useTabs = (
  initalTab: number,
  allTabs: {}[],
) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [index, setIndex] = useState(initalTab);
  return {
    currentItem: allTabs[index],
    changeItem: setIndex,
  }
};

export default useTabs;
