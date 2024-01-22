import React from "react"
import * as styles from "./Access.style"
import { data } from "@data/access"
import { Button } from "@sharing/atoms"

export default function Access() {
  const { title, subtitle, text, button } = data
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.right_container}>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.text}>{text}</p>
          <Button 
            types='submit'
            text={button}
            style={styles.button}
            action={''}
          />
        </div>
      </div>
    </section>
  )
}
