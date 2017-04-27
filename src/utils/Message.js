import Toast from "react-native-root-toast";

const methods = ["success", "error", "info", "warning", "warn", "loading"];

const Message = {};

methods.forEach(method => {
  Message[method] = (content, options) => {
    if (content.status === 500) {
      console.log(content);
    } else {
      const content = typeof content === "object" ? content.message : content;
      return Toast.show(content, options);
    }
  };
});

export default Message;
