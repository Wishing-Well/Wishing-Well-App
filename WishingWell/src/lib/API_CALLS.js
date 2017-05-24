/*jshint esversion: 6*/

export const login = (username, password) => fetch('http://10.0.1.10:4000/api/users/login',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  }
)
.then(res => res.json())
.catch(error => err);


export const signup = userInfo => fetch('http://10.0.1.10:4000/api/users/create',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  }
)
.then(res => res.json())
.catch(err => err);

export const createWell = wellInfo => fetch('http://10.0.1.10:4000/api/wells',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(wellInfo)
  }
)
.then(res => res.json())
.catch(error => err);