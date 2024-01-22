import React from "react"
import * as styles from "./Error.style"

export default function Error() {
  return (
    <div className={styles.container}>
      <div className={styles.circle_border}></div>
      <div className={styles.circle}>
          <div className={styles.error}></div>
      </div>
    </div>
  )
}
