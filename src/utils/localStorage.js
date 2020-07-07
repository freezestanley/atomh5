const store = {
  serverName: '',
};
export default {
  setKey(key, value) {
    store[key] = value;
    return true;
  },
  getKey(key) {
    return store[key];
  },
};
