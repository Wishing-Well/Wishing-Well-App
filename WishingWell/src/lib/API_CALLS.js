/*jshint esversion: 6*/

export const login = (username, password) => fetch('/api/users/login',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  }
);

export const signup = userInfo => fetch('/api/users/signup',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  }
);