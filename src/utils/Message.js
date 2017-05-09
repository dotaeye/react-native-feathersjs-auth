import Toast from "react-native-root-toast";

const methods = ["success", "error", "info", "warning", "warn", "loading"];

const Message = {};

methods.forEach(method => {
  Message[method] = (error, options) => {
    console.log(error);
    if (error.code === 500) {
    } else {
      const content = typeof error === "object" ? error.message : error;
      return Toast.show(content, options);
    }
  };
});

export default Message;
