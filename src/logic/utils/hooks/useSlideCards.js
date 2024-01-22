import React, { useState, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"

const useSlideCards = ({  
  auto,
  children
}) => {
  const [active, setActive] = useState(0);
  const childrenCount = React.Children.count(children);
  const { colors } = useSelector(({ config }) => config);
  const { extra: barColor } = colors;

  const incrementActive = () => {
    if (active < childrenCount - 1) {
      setActive(active + 1);
    }
    if ( auto && active === childrenCount - 1) {
      setActive(0);
    }
  };

  const decrementActive = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  useEffect(() => {
    if (auto) {
      const intervaloId = setInterval(incrementActive, 2000);
  
      return () => {
        clearInterval(intervaloId);
      };
    } 
  }, [auto, childrenCount, incrementActive]);
  

  return {
    childrenCount,
    active,
    decrementActive,
    incrementActive,
    barColor
  }
};

export default useSlideCards;