import { useContext } from "react"
import { DropdownContext } from "@contexts"
import * as styles from "./DropdownTitle.style"

export default function DropdownTitle({
  size = 20,
  weight = 400,
  align = "left",
  children
}) {
  const { 
    themes, 
    theme
  } = useContext(DropdownContext);
  return (
    <p className={styles.title({
      size,
      weight,
      theme, 
      align,
      themes
      })}>
      {children}
    </p> 
  )
}
