export const updateCurrentState = ({cards}) => {
    const keys = Object.keys(cards);
    const currentTrueKey = keys.find((key) => cards[key]);
    const currentIndex = keys.indexOf(currentTrueKey);
    const nextIndex = (currentIndex + 1) % keys.length;
    const newCards = {};
    keys.forEach((key) => {
      newCards[key] = false;
    });
    newCards[keys[nextIndex]] = true;
    return newCards;
};