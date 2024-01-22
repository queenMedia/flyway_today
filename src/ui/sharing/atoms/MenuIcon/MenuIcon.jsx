import { useContext, useState } from "react"
import { MenuContext } from "@contexts"
import * as styles from "./MenuIcon.style"

export default function MenuIcon() {
	// const { menu, handleMenu } = useContext(MenuContext);
	const [menu, setMenu] = useState(false);
  const handleMenu = () => (setMenu(!menu));
  return (
    <label className={styles.bar} for="check">
      <input 
        className={styles.input} 
        type="checkbox" 
        value={menu} 
        onClick={handleMenu} 
        />
      <span className={styles.top(menu)}></span>
      <span className={styles.middle(menu)}></span>
      <span className={styles.bottom(menu)}></span>
    </label>
  )
}
