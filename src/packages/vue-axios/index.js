import axios from 'axios'

export default function (Vue) {
  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  var token = Vue.auth.getApiToken()
  if (token) {
    headers['Authorization'] = 'Bearer ' + token
  }
  axios.defaults.headers.common = headers
  axios.defaults.baseURL = API_URL

  // intercept the global error
  axios.interceptors.response.use((response) => {
    return response
  }, function (error) {
    let originalRequest = error.config
    // if the error is 401 and hasent already been retried
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true // now it can be retried

      return axios.post('/api/jwt/refresh', {
        api_token: Vue.auth.getRefreshToken()
      })
        .then((response) => {
          var tokens = response.data
          Vue.auth.setTokens(tokens)
          axios.defaults.headers.common.Authorization = Vue.auth.getAuthorizationHeader()
          originalRequest.headers['Authorization'] = Vue.auth.getAuthorizationHeader() // new header new token
          return axios(originalRequest) // retry the request that errored out
        }).catch((error) => {
          console.log(error)
          if (error.response.status === 401) {
            Vue.auth.destroyTokens()
            return
          }
        })
    }
    if (error.response.status === 404 && !originalRequest._retry) {
      originalRequest._retry = true
      window.location.href = '/' // not sure about this
      return
    }
    // Do something with response error
    return Promise.reject(error)
  })
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return axios
      }
    },
    $http: {
      get () {
        return axios
      }
    }
  })
}
