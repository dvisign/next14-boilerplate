import axios from "axios"

const setURL = (config, api = "") => {
  if (config?.url) {
    config.url = `${process.env.NEXT_PUBLIC_API_URL}${config.url}`
  }
  return config
}
const setContentType = options => {
  if (!options.headers) options.headers = {}
  if (!options.headers["Content-Type"]) {
    const contentType = (options.contentType || "").toUpperCase()
    switch (contentType) {
      case "FORM":
        options.headers["Content-Type"] = "application/x-www-form-urlencoded"
        break
      case "FILE":
        options.headers["Content-Type"] = "multipart/form-data"
        break
      case "BLOB":
        options.headers["Content-Type"] = "application/json;charset=UTF-8"
        break
      default:
        options.headers["Content-Type"] = "application/json"
        break
    }
  }
  options.originalUrl = options.url
  return options
}
const setBaseOptions = () => {
  const options = {
    withCredentials: true,
    timeout: 5000,
    headers: {},
  }
  options.headers["Access-Control-Allow-Origin"] = "*"
  options.headers["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  return options
}
// axios default interceptor
const defaultApiService = axios.create({ ...setBaseOptions() })
defaultApiService.interceptors.request.use(
  async config => {
    return setURL(config, "API")
    // if (getAccessToken.value) {
    //   return setURL(config, "API")
    // } else {
    //   return false
    // }
  },
  async error => {
    console.log(error)
    return Promise.reject(null)
  },
)
defaultApiService.interceptors.response.use(
  async response => {
    console.log(response)
    const rs = await response
    return rs
  },
  async _error => {
    console.log(_error)
  },
)
// axios throttle interceptor
const throttleApiService = axios.create({ ...setBaseOptions() })
throttleApiService.interceptors.request.use(
  async config => {
    return setURL(config, "API")
    // if (getAccessToken.value) {
    //   return setURL(config, "API")
    // } else {
    //   return false
    // }
  },
  async error => {
    console.log(error)
    return Promise.reject(null)
  },
)
throttleApiService.interceptors.response.use(
  async response => {
    console.log(response)
    const rs = await response
    return rs
  },
  async _error => {
    console.log(_error)
  },
)
// axios debounce interceptor
const debounceApiService = axios.create({ ...setBaseOptions() })
debounceApiService.interceptors.request.use(
  async config => {
    return setURL(config, "API")
    // if (getAccessToken.value) {
    //   return setURL(config, "API")
    // } else {
    //   return false
    // }
  },
  async error => {
    console.log(error)
    return Promise.reject(null)
  },
)
debounceApiService.interceptors.response.use(
  async response => {
    console.log(response)
    const rs = await response
    return rs
  },
  async _error => {
    console.log(_error)
  },
)
// axios login interceptor
const loginApiService = axios.create({ ...setBaseOptions() })
loginApiService.interceptors.request.use(
  async config => {
    return setURL(config, "API")
    // if (getAccessToken.value) {
    //   return setURL(config, "API")
    // } else {
    //   return false
    // }
  },
  async error => {
    console.log(error)
    return Promise.reject(null)
  },
)
loginApiService.interceptors.response.use(
  async response => {
    console.log(response)
    const rs = await response
    return rs
  },
  async _error => {
    console.log(_error)
  },
)

// axios default
export const defaultFetchApis = options => defaultApiService(setContentType(options))
// axios throttle
export const throttleFetchApis = options => throttleApiService(setContentType(options))
// axios debounce
export const debounceFetchApis = options => debounceApiService(setContentType(options))
// axios login
export const loginFetchApis = options => loginApiService(setContentType(options))
