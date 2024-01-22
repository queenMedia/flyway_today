import { useContext } from "react"
import { FormContext } from "@contexts"
import * as styles from "./ErrorLabel.style"

export default function ErrorLabel({
  name
}) {
	const { formik } = useContext(FormContext);
  return (
    <small className={styles.error({visible: (formik.touched[name] && formik.errors[name])})}>
      {formik.errors[name]}
    </small>
  )
}
