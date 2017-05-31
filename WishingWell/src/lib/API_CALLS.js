/*jshint esversion: 6*/

export const login = (username, password) => fetch('http://10.0.1.35:4000/api/users/login',
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


export const signup = userInfo => fetch('http://10.0.1.35:4000/api/users/create',
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

export const createWell = wellInfo => fetch('http://10.0.1.35:4000/api/wells/create',
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

export const getAllWells = () => fetch('http://10.0.1.35:4000/api/wells', {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);

export const getUserWell = user_id => fetch(`http://10.0.1.35:4000/api/users/${user_id}/wells`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);

export const getUserDonations = user_id => fetch(`http://10.0.1.35:4000/api/users/${user_id}/donations`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(error => error);

export const donate = (id, amount, token, message) => fetch('http://10.0.1.35:4000/api/wells/donate',
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

export const makeCharge = (amount, token) => fetch('http://10.0.1.35:4000/api/payments/create',
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

export const getUserInfo = user_id => fetch(`http://10.0.1.35:4000/api/users/${user_id}`, {
  credentials: 'include',
})
  .then(res => res.json())
  .catch(error => error);

export const logout = () => fetch('http://10.0.1.35:4000/api/users/logout', {
  credentials: 'include',
})
  .then(res => res.json())
  .catch(error => error);

export const reLogin = () => fetch('http://10.0.1.35:4000/api/users/info', {
  credentials: 'include',
})
  .then(res => {
    console.log(res);
    return res.json();
  })
  .catch(error => error);