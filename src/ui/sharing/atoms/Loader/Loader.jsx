import React from "react"
import * as styles from "./Loader.style"

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>Cargando</div>
    </div>
  )
}
