export const generateFirstStateRecords = () => {
  const rows = [];
  for (let i = 0; i < 12; i++) {
    rows.push({
      user: randomLetter(),
      time: getRandomTimeAndDate()
    })
  }
  return rows;
}

export const sumChildrenHeights = (parentElement, limitSum) => {
  if (!parentElement || !parentElement.children || limitSum <= 0) {
    return 0;
  }

  const childrenArray = Array.from(parentElement.children);

  const limitedChildrenArray = childrenArray.slice(0, limitSum);

  const totalHeight = limitedChildrenArray.reduce((sum, child) => {
    const childHeight = child.clientHeight + 20 || 0;
    return sum + childHeight;
  }, 0);

  return totalHeight;
};
