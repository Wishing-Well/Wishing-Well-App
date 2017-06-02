/*jshint esversion: 6*/
const old_ip = '10.0.1.35:4000';
const ip = '165.227.12.249:4000';

export const login = (username, password) => fetch(`http://${ip}/api/users/login`,
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


export const signup = userInfo => fetch(`http://${ip}/api/users/create`,
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

export const createWell = wellInfo => fetch(`http://${ip}/api/wells/create`,
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

export const getAllWells = () => fetch(`http://${ip}/api/wells`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);

export const getAllUsers = () => fetch(`http://${ip}/api/users/names`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);


export const getUserWell = user_id => fetch(`http://${ip}/api/users/${user_id}/wells`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);

export const getUserDonations = user_id => fetch(`http://${ip}/api/users/${user_id}/donations`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);

export const donate = (id, amount, token, message) => fetch(`http://${ip}/api/wells/donate`,
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

export const makeCharge = (amount, token) => fetch(`http://${ip}/api/payments/create`,
  {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({amount, token})
  }
)
  .then(res => res.json())
  .catch(error => error);

export const getUserInfo = user_id => fetch(`http://${ip}/api/users/${user_id}`, {
  credentials: 'include',
})
  .then(res => res.json())
  .catch(error => error);

export const logout = () => fetch(`http://${ip}/api/users/logout`, {
  credentials: 'include',
})
  .then(res => res.json())
  .catch(error => error);

export const reLogin = () => fetch(`http://${ip}/api/users/info`, {
  credentials: 'include',
})
  .then(res => {
    console.log(res);
    return res.json();
  })
  .catch(error => error);