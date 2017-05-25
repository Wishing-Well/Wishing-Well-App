/*jshint esversion: 6*/

export const login = (username, password) => fetch('http://10.0.1.35:4000/api/users/login',
  {
    method: 'POST',
    credentials: 'same-origin',
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
    credentials: 'same-origin',
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
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wellInfo)
  }
)
.then(res => {
  console.log(res);
  return res.json()})
.catch(error => error);

export const getAllWells = () => fetch('http://10.0.1.35:4000:4000/api/wells', {
  credentials: 'same-origin'
})
  .then(res => res.json())
  .catch(error => error);

export const getUserWell = user_id => fetch(`http://10.0.1.35:4000/api/users/${user_id}/wells`, {
  credentials: 'same-origin'
})
  .then(res => res.json())
  .catch(error => error);

export const getUserDonations = user_id => fetch(`http://10.0.1.35:4000/api/users/${user_id}/donations`, {
  credentials: 'same-origin'
})
  .then(res => res.json())
  .catch(error => error);

export const getUserInfo = user_id => fetch(`http://10.0.1.35:4000/api/users/${user_id}`, {
  credentials: 'same-origin',
})
  .then(res => res.json())
  .catch(error => error);