import store from '../store'

const getAuth = () => {
  return 'Bearer ' + store.getState().userReducer.token
}

module.exports.re_captcha_site_key = "6LdrEGQUAAAAAM8AyheGDWIyNU63bf2kiHiJmsaF"

module.exports.loginConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }
}

module.exports.postConfig = () => ({
  method: 'POST',
  body: '',
  headers: {
    'Authorization': getAuth(),
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }
})

module.exports.putConfig = () => ({
  method: 'PUT',
  body: '',
  headers: {
    'Authorization': getAuth(),
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }
})

module.exports.uploadConfig = () => ({
  method: 'POST',
  body: '',
  headers: {
    'Authorization': getAuth(),
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json'
  }
})

module.exports.getConfig = () => ({
  method: 'GET',
  headers: {
    'Authorization': getAuth(),
    'Accept': 'application/json'
  }
})

module.exports.patchConfig = () => ({
  method: 'PATCH',
  headers: {
    'Authorization': getAuth(),
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }
})

module.exports.deleteConfig = () => ({
  method: 'DELETE',
  headers: {
    'Authorization': getAuth(),
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }
})
