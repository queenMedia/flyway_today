import React, { useState } from "react"
//  logic
import { MenuContext } from "@contexts"
import { useWindowSize } from "@hooks"
// components
import { MenuIcon, HeaderNav } from "@sharing/atoms"
//  images and styles
import logo from "@images/sharing/logo_blue.webp"
import * as styles from "./Header.style"

export default function Header() {
  const { width } = useWindowSize();
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  return (
    <header className={styles.header}>
      <MenuContext.Provider value={{menu, handleMenu}}>
        <div className={styles.container}>
          <img 
            src={logo} 
            alt="Flyway logo blue" 
            width={77}
            height={68.228}
            className={styles.logo}
          />
          <HeaderNav />
          {width <= 768 && <MenuIcon />}
        </div>
      </MenuContext.Provider>
    </header>
  )
}
