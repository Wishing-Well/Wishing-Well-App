/*jshint esversion: 6*/
const old_ip = '10.0.1.35:4000';
const ip = 'https://wellitapp.com';

export const login = (username, password) => fetch(`${ip}/api/users/login`,
  {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  }
)
.then(res => res.json())
.catch(error => err);


export const signup = userInfo => fetch(`${ip}/api/users/create`,
  {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo)
  }
)
.then(res => res.json())
.catch(err => err);

export const createWell = wellInfo => fetch(`${ip}/api/wells/create`,
  {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wellInfo)
  }
)
.then(res => {
  console.log(res);
  return res.json();
})
.catch(error => error);

export const getAllWells = () => fetch(`${ip}/api/wells`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);

export const getAllUsers = () => fetch(`${ip}/api/users/names`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);


export const getUserWell = user_id => fetch(`${ip}/api/users/${user_id}/wells`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);

export const getUserDonations = user_id => fetch(`${ip}/api/users/${user_id}/donations`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);

export const donate = (id, amount, token, message) => fetch(`${ip}/api/wells/donate`,
  {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id, amount, token, message})
  }
)
  .then(res => res.json())
  .catch(error => error);

export const getUserInfo = user_id => fetch(`${ip}/api/users/${user_id}`, {
  credentials: 'include',
})
  .then(res => res.json())
  .catch(error => error);

export const logout = () => fetch(`${ip}/api/users/logout`, {
  credentials: 'include',
})
  .then(res => res)
  .catch(error => error);

export const reLogin = () => fetch(`${ip}/api/users/info`, {
  credentials: 'include',
})
  .then(res => {
    console.log(res);
    return res.json();
  })
  .catch(error => error);