import { AsyncStorage } from "react-native";
import io from "socket.io-client";
import feathers from "feathers/client";
import hooks from "feathers-hooks";
import socketio from "feathers-socketio/client";
import authentication from "feathers-authentication-client";
import { API } from "../configs";

const options = {
  transports: ["websocket"],
  pingTimeout: 3000,
  pingInterval: 5000
};

const socket = io(API.apiRoot, options);

const client = feathers();

client.configure(hooks());
client.configure(socketio(socket));
client.configure(
  authentication({
    storage: AsyncStorage
  })
);

export default client;
