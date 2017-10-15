export default function (Vue) {
  Vue.auth = {
    setToken: (token, expiration) => {
      //
    },
    getToken: () => {
      //
    },
    destroyToken: () => {
      //
    },
    isAuthenticated: () => {
      return true
    }
  }
  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Vue.auth
      }
    }
  })
}
