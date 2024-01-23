// Nativ and third-party importations
import { useState } from "react"
import { useFormik } from 'formik';
// Logic
import { handleSubmit } from "@handlers/form/submit"
import { INITIAL_VALUES } from "@constants/form";
import { validationSchema } from "@schemas/form";

const useFormikForm = () => {
  const [loading, setLoading] = useState(false);
  
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: async (values) => handleSubmit({
      values,
      loading: setLoading,
    }),
  });

  return {
    loading,
    formik
  }
}

export default useFormikForm;