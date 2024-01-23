import { useContext } from "react"
import { form } from "@data/hero"
import { FormContext } from "@contexts"
import { inputs } from "@constants/form"
import { Input } from "@sharing/atoms"
import * as styles from "./Form.style"

export default function Form() {
  const { formik } = useContext(FormContext);
  const inputs_ids = Object.keys(inputs);
  const { 
    title,
    bottom,
    button,
    payments
  } = form;
  return (
    <form id="contact" className={styles.form} onSubmit={formik.handleSubmit}>
      <p className={styles.title}>{title}</p>
      {inputs_ids.map((id, index) => (
        <Input key={`input-${id}-${index}`} id={id} />
      ))}
      <button type="submit" 
        className={styles.button}>
        {button}
      </button>
      <div className={styles.bottom_container}>
        <p className={styles.bottom_text}>{bottom}</p>
        <div className={styles.payments}>
          {payments.map((img, index) => (
            <img 
              src={img}
              alt="input icon"
              width={45.911}
              height={30.698}
              key={`payment-${index}`}
            />
          ))}
        </div>
      </div>
    </form>
  )
}
