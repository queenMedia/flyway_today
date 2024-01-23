import { useContext } from "react"
import { MenuContext } from "@contexts"
import * as styles from "./MenuIcon.style"

export default function MenuIcon() {
	const { menu, handleMenu } = useContext(MenuContext);

  return (
    <label className={styles.bar} htmlFor="check">
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
