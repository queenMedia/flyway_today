// Nativ and third-party importations
import { useState } from "react"
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
// Logic
import { contactConfig } from "@constants/form"
import { generate } from "@services/generate/generateLeadObject"
import { useDataReady } from "@hooks"

const useFormikForm = () => {
  const currentCountry = useSelector(({country}) => (country))
  const { schema } = useDataReady();
  const [loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const extraParams = {
    ip: (currentCountry ? currentCountry.ip : ''),
    userAgent: navigator.userAgent,
    params: window.location.search,
    countryCode: (currentCountry ? currentCountry.countryCode : ''),
    phoneCode: (currentCountry ? currentCountry.phoneCode : '')
  };
  
  const formik = useFormik({
    initialValues: contactConfig.values,
    validationSchema: schema,
    validateOnMount: true,
    onSubmit: async (values) => contactConfig.handler({
      values: generate({
        values: {
          ...values,
          ...extraParams
        }
      }),
      loading: setLoading,
      responseData: setResponseData,
      showResponse: setShowResponse,
      service: contactConfig.service,
    }),
  });

  return {
    loading,
    showResponse,
    responseData,
    currentCountry,
    formik
  }
}

export default useFormikForm;