import { useContext } from "react"
import { DropdownContext } from "@contexts"
import * as styles from "./DropdownHeader.style"

export default function DropdownHeader({
  justify = "space-between",
  children
}) {
  const { 
    themes, 
    theme, 
    handleActive 
  } = useContext(DropdownContext);

  return (
    <div className={styles.dropdownHeader({
      theme,
      themes,
      justify
    })} 
    onClick={handleActive}>
      {children}
  </div>
  )
}
