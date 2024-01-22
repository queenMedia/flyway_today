// Nativ and third-party importations
import { FormContext } from "@contexts"
// Component importations
import { Loader } from "@sharing/atoms"
import { ResponseCard, Form } from "@sharing/molecules"
// logic
import { useFormikForm } from "@hooks"

export default function ContactForm() {
  const { 
    loading,
    showResponse,
    responseData,
    formik,
    currentCountry
  } = useFormikForm();

  return (
    <>
      {loading && <Loader />}
        <FormContext.Provider value={{formik, currentCountry}}>
          <Form />
        </FormContext.Provider>
      {showResponse && <ResponseCard message={responseData.message} status={responseData.status} />}
    </>
  )
}