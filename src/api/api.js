class Api {
  constructor(groupId) {
  this.url = "https://api.react-learning.ru";
  this.groupId = groupId
  }

//  регистрация
 reg(values) {
  return fetch(`${this.url}/signup`, {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
  body: JSON.stringify(values)
  })
}

 // авторизация
 auth(values) {
  return fetch(`${this.url}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
  })
}

// запрос всех пользователей
  allUsers(token) {
    return fetch(`${this.url}/v2/${this.groupId}/users`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    })
  }

  // запрос информации обо мне
  me(token) {
    return fetch(`${this.url}/v2/${this.groupId}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    })
  }

  // запрос всех продуктов
  getProducts(token){
    return fetch(`${this.url}/products`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    })
  }

}


   const api = new Api ('9-gr');
   export { api }