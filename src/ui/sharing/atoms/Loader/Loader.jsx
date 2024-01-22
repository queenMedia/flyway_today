import React from "react"
import { useSelector } from "react-redux"
import * as styles from "./Loader.style"

export default function Loader() {
	const { loader } = useSelector(({config}) => config);
  return (
    <div className={styles.container}>
      <div className={styles.loader}>{loader}</div>
    </div>
  )
}
