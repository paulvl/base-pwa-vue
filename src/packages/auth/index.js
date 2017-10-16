// import SyncHttpClient from '../../common/SyncHttpClient'
import jwtDecode from 'jwt-decode'

export default function (Vue) {
  Vue.auth = {
    setTokens (tokens) {
      var apiToken = tokens.api_token
      var refreshToken = tokens.refresh_token
      var decodedApiToken = jwtDecode(tokens.api_token)
      var expiration = decodedApiToken.exp + Date.now()
      localStorage.setItem('apiToken', apiToken)
      localStorage.setItem('expiration', expiration)
      localStorage.setItem('refreshToken', refreshToken)
    },
    getApiToken () {
      var apiToken = localStorage.getItem('apiToken')
      var expiration = localStorage.getItem('expiration')
      // var refreshToken = localStorage.getItem('refreshToken')

      if (!apiToken || !expiration) {
        return null
      }

      if (Date.now() > parseInt(expiration)) {
        // trata de refrescar el token
        return null
      } else {
        return apiToken
      }
    },
    getRefreshToken () {
      var expiration = localStorage.getItem('expiration')
      var refreshToken = localStorage.getItem('refreshToken')

      if (!refreshToken || !expiration) {
        return null
      }

      if (Date.now() > parseInt(expiration)) {
        // trata de refrescar el token
        return null
      } else {
        return refreshToken
      }
    },
    destroyTokens () {
      localStorage.removeItem('apiToken')
      localStorage.removeItem('expiration')
      localStorage.removeItem('refreshToken')
    },
    isAuthenticated () {
      return this.getToken != null
    },
    getAuthorizationHeader () {
      return 'Bearer ' + this.getApiToken()
    }
  }
  Object.defineProperties(Vue.prototype, {
    $auth: {
      get () {
        return Vue.auth
      }
    }
  })
}
