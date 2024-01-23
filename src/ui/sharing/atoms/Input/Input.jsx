import { useContext } from "react"
import { FormContext } from "@contexts"
import { InputLabel, ErrorLabel } from "@sharing/atoms"
import { form } from "@data/hero"
import { inputs, input_config } from "@constants/form"
import * as styles from "./Input.style"

export default function Input({id}) {
  const { input_icons } = form;
	const { [id]: input_props } = inputs;
	const { label, placeholder, type } = input_props;
	const { label_display } = input_config;
	const { formik, } = useContext(FormContext);
  return (
    <div className={styles.container}>
      {label_display && <InputLabel id={id}>{label}</InputLabel>}
			<div className={styles.input_container({...input_config, type})}>
        <div className={styles.code(input_config)}>
          <img 
            src={input_icons[id]}
            alt="input icon"
            width={20}
            height={"auto"}
          />
				  {type === "number" && (
						<p>{`+ 52`}</p>
          )}
        </div>
				<input 
					id={id}
					type={type} 
					placeholder={placeholder} 
					{...formik.getFieldProps(id)}
					className={styles.input(input_config)}
				/>
			</div>
			{formik.touched[id] 
				&& formik.errors[id] 
				&& <ErrorLabel name={id}/>}
    </div>
  )
}

