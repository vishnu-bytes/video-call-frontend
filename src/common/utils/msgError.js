import { message } from "antd";

const msgError = (error) => {
  if (error?.response?.data?.message) {
    message.error(error?.response?.data?.message);
  } else if (error.message === "Network Error") {
    message.warn("Please check your internet connection & try again !");
  } else {
    message.error("Some error occured !");
  }
};

export default msgError;
