export const types = {
  CONNECT: "CONNECT",
  DISCONNECT: "DISCONNECT"
};

export function connect() {
  return {
    type: types.CONNECT
  };
}

export function disconnect() {
  return {
    type: types.DISCONNECT
  };
}
