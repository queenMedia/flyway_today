import { 
  REGEX_EMAIL,
  REGEX_PHONE_NUMBER,
  REGEX_NAME 
} from "@constants/regularExpressions";
import { messages } from "@constants/form";
import * as yup from 'yup';

const {
  required,
  name,
  last_name,
  email,
  number
 } = messages;

export const validationSchema = yup.object().shape({
  name: yup.string().matches(REGEX_NAME, name).required(required),
  last_name: yup.string().matches(REGEX_NAME, last_name).required(required),
  email: yup.string().matches(REGEX_EMAIL, email).required(required),
  number: yup.string().matches(REGEX_PHONE_NUMBER, number).required(required),
});