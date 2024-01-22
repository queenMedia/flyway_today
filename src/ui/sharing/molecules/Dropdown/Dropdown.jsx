import { useState } from 'react';
import { DropdownContext } from "@contexts"
import * as styles from "./Dropdown.style"

export default function Dropdown({
  theme = "dark",
  themes,
  children
}) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className={styles.dropdown}>
      <DropdownContext.Provider value={{ 
        theme,
        themes: (themes ? themes : styles.themes),
        active, 
        handleActive 
        }}>
        {children}
      </DropdownContext.Provider>
    </div>
  )
}

      