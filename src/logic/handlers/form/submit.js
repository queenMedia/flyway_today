import { sendContact } from "@services/contact/send"
export const handleSubmit = async ({
  values,
  loading
}) => {
  loading(true);
  try {
    const response = await sendContact(values);
    return
  } catch (error) {
      console.log(error)
  } finally {
    loading(false);
  }
};
