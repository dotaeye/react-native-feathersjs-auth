export const types = {
  CONNECT: "CONNECT",
  DISCONNECT: "DISCONNECT"
};

export function connect() {
  return {
    type: types.CONNECT
  };
}

export function disConnect() {
  return {
    type: types.DISCONNECT
  };
}
