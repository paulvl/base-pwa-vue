export default class SyncHttpClient {
  constructor (options) {
    this.options = options
  }
  send () {
    var options = this.options
    options.url = options.url
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest()
      xhr.open(options.method, options.url)
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve({
            code: this.status,
            status: xhr.statusText,
            data: JSON.parse(xhr.response)
          })
        } else {
          reject({
            code: this.status,
            status: xhr.statusText,
            data: JSON.parse(xhr.response)
          })
        }
      }
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        })
      }
      if (options.headers) {
        Object.keys(options.headers).forEach(function (key) {
          xhr.setRequestHeader(key, options.headers[key])
        })
      }
      var params = options.params
      if (params && typeof params === 'object') {
        params = JSON.stringify(params)
      }
      xhr.send(params)
    })
  }
}
