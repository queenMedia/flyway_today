import React from "react"
import { useSelector } from "react-redux"
import * as styles from "./InputLabel.style"

export default function InputLabel({
  id,
  children,
}) {
  const { input_config } = useSelector(({config}) => config);
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
