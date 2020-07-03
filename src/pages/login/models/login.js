

export default {
  namespace: 'login',
  state: {
    name: 'wike'
  },
  reducers: {
    setUserInfo(state, {payload: {name}}) {
      return {...state, name}
    }
  },
  effects: {
    * login ({payload: {}}, {call, put}) {
      
    }
  }
}