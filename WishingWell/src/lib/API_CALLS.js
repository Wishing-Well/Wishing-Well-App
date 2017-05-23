/*jshint esversion: 6*/

export const login = (username, password) => fetch('http://10.0.1.35:4000/api/users/login',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  }
).then(res => {
  console.log(res);
  return res.json();
});

export const signup = userInfo => fetch('http://10.0.1.35:4000/api/users',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  }
).then(res => res.json());