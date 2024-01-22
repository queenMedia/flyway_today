export const handleSubmit = async ({
  values,
  loading,
  responseData,
  showResponse,
  service,
}) => {
  loading(true);
  try {
    const response = await service(values);
    responseData(response.get());
    showResponse(true);
    setTimeout(() => showResponse(false), 3000);
  } catch (error) {
      responseData({
          success: false,
          message: error.message
      });
  } finally {
    loading(false);
  }
};
