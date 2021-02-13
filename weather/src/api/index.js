const root = 'https://lab.lectrum.io/rtx/api/';

export const api = Object.freeze({
  forecast: {
    fetch: (limit=7) => {
      return fetch(`${root}forecast/?limit=${limit}`, {
        method: "GET",
      })
    }
  },
})
