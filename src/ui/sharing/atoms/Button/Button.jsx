import React from "react"
import * as styles from "./Button.style"

export default function Button({
  style, 
  text, 
  type,
  action,
}) {

  return (
    <button 
      {...(action ? { onClick: action } : {})}
      {...(type ? type={type} : {})} 
      className={style ? style : styles.button}>
        {text}
    </button>
  )
}
