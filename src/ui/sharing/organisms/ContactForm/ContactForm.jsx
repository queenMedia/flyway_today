// Nativ and third-party importations
import { FormContext } from "@contexts"
// Component importations
import { Loader } from "@sharing/atoms"
import { Form } from "@sharing/molecules"
// logic
import { useFormikForm } from "@hooks"

export default function ContactForm() {
  const { 
    loading,
    formik,
  } = useFormikForm();

  return (
    <>
      {loading && <Loader />}
        <FormContext.Provider value={{formik}}>
          <Form />
        </FormContext.Provider>
    </>
  )
}