import { useSelector } from 'react-redux';
import { REGEX_EMAIL, REGEX_NAME } from  "@constants/regularExpressions";
import * as yup from 'yup';

const useDataReady = () => {
  const { validation } = useSelector(({config}) => config);
  const regexWithoutDelimiters = validation.number_regex.slice(1, -1); 
  const regexNumber = new RegExp(regexWithoutDelimiters);

  const schema = yup.object().shape({
    name: yup.string().matches(REGEX_NAME, validation.name).required(validation.required),
    email: yup.string().matches(REGEX_EMAIL, validation.email).required(validation.required),
    phone: yup.string().matches(regexNumber,  validation.phone).required(validation.required),
  });

  return {
    validation,
    schema
  };
}

export default useDataReady;
