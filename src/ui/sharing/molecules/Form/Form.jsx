import { useContext } from "react"
import { useSelector } from "react-redux"
import { FormContext } from "@contexts"
import { Input } from "@sharing/atoms"
import * as styles from "./Form.style"

export default function Form() {
  const { formik } = useContext(FormContext);
	const { inputs, form: form_props, colors, input_config } = useSelector(({config}) => config);
  const { tertiary } = colors;
  const { code_color } = input_config;
  const inputs_ids = Object.keys(inputs);
  return (
    <form id="contact" className={styles.form(form_props)} onSubmit={formik.handleSubmit}>
      {inputs_ids.map((id, index) => (
        <Input key={`input-${id}-${index}`} id={id} />
      ))}
      <button type="submit" 
        className={styles.button({
          tertiary, 
          code_color})}>
        {form_props.button}
      </button>
    </form>
  )
}
