const request = (url='', option = {}) => {
  const root = 'https://lab.lectrum.io/rtx/api/todos';
  const init = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-user": "nasypana"
    }
  }
  return fetch(`${root}${url}`, {...init, ...option})
}

export const api = Object.freeze({
  getTasks: () =>  request().then(res => res.json()),

  getTask: hash => request(`/${hash}`).then(res => res.json()),

  createTask: data => {
    const body = JSON.stringify(data);
    return request('', {method: "POST", body}).then(res => res.json())
  },

  updateTask: (hash, data) => {
    const body = JSON.stringify(data);
    return request(`/${hash}`, {method: "PUT", body}).then(res => res.json())
  },

  deleteTask: hash => request(`/${hash}`, {method: "DELETE"}),

})
