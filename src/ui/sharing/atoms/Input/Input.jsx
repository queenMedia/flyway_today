import { useContext } from "react"
import { FormContext } from "@contexts"
import { InputLabel, ErrorLabel } from "@sharing/atoms"
import { useSelector } from 'react-redux';
import { useWindowSize } from "@hooks"

import * as styles from "./Input.style"

export default function Input({id}) {
  const { width } = useWindowSize();
	const { input_config, inputs } = useSelector(({config}) => config);
	const { [id]: input_props } = inputs;
	const { label, placeholder, type } = input_props;
	const { label_display } = input_config;
	const { formik, currentCountry } = useContext(FormContext);
	const { phoneCode, flag, countryCode } = currentCountry;
  return (
    <div className={styles.container}>
      {JSON.parse(label_display) && <InputLabel id={id}>{label}</InputLabel>}
			<div className={styles.input_container({...input_config, type})}>
				{type === "number" && (
					<div className={styles.code(input_config)}>
						<img 
							src={flag} 
							alt={`Flag form ${countryCode}`}
							width={28}
							height={18.5}
						/>
						<p>{`${width > 768 ? "+" : ""} ${phoneCode}`}</p>
					</div>
				)}
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

