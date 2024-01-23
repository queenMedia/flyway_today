import { useContext } from "react"
import { MenuContext } from "@contexts"
//  logic
import { nav } from "@data/header"
import { useScrollToSection } from "@hooks"

import * as styles from "./HeaderNav.style"

export default function HeaderNav() {
  const { scrollToSection } = useScrollToSection();
  const { menu } = useContext(MenuContext);
  return (
    <ul className={styles.nav({menu})}>
      {nav.map(({section, content}, index) => (
        <li 
          className={styles.link}
          key={`nav-link-${index}-${section}`}
          onClick={() => scrollToSection(section)}>{content}</li>
      ))}
    </ul>
  )
}
