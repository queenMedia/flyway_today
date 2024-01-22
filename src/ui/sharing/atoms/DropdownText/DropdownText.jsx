import { useContext } from "react"
import { DropdownContext } from "@contexts"
import * as styles from "./DropdownText.style"

export default function DropdownText({
  size = 18,
  weight = 400,
  align = "left",
  children
}) {
  const { 
    themes, 
    theme,
  } = useContext(DropdownContext);
  return (
    <p className={styles.paragraph({
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
