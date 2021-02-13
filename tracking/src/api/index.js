const request = (url='', option = {}) => {
  const root = 'https://lab.lectrum.io/rtx/api/fitness/';

  const initStart = {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  };

  const init = {...initStart, ...option};

  if(option.headers){
    init.headers = {...init.headers, ...initStart.headers};
  }

   return fetch(`${root}${url}`, {...init})
}

export const api = Object.freeze({
  login: data => {
    const str = `${data.email}:${data.password}`;
    const strBase64 = Buffer.from(str).toString('base64');
    const headers = {
      'authorization': `Base ${strBase64}`
    }

    return request('login', {method: "POST", headers})
  },

  logout: () => request('logout', {method: "POST"}),

  getProfile: () => request('profile'),

  createUser: data => {
    const body = JSON.stringify(data);
    return request('users', {method: "POST", body})
  },

  updateUser: data => {
    const body = JSON.stringify(data);
    return request('users', {method: "PUT", body})
  },

  getActivity: kind => request(`records?kind=${kind}`),

  addActivity: (kind, data) => {
    const body = JSON.stringify(data);
    return request(`records?kind=${kind}`, {method: "POST", body})
  },

  updateActivity: (hash, kind, data) => {
    const body = JSON.stringify(data);
    return request(`records/${hash}?kind=${kind}`, {method: "PUT", body})
  },

  getResults: () => request(`reports`),

  resetResults: () => request(`reports/reset`, {method: "POST"} ),

})
