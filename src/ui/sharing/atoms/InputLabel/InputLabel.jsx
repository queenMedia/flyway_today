import React from "react"
import { input_config } from "@constants/form"
import * as styles from "./InputLabel.style"

export default function InputLabel({
  id,
  children,
}) {
	const { label_color, label_size } = input_config;
  return (
    <label htmlFor={id} className={styles.label({
      label_color,
      label_size
      })}>
      {children}
    </label>
  )
}
