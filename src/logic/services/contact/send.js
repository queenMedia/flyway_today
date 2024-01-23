export const sendContact = async (values) => {
  try {
    console.table(values)
    return
  } catch (error) {
    if (error.response) {
      console.error('Server error response:', error.response.status);
      return
    } else if (error.request) {
      console.error('Server or network error', error.request);
      return 
    } else {
      console.error('Request config error', error.message);
      return 
    }
  }
}
