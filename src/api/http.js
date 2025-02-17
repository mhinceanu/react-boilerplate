const http = {
  get: () => ({
    method: 'GET',
    'Content-Type': 'application/json'
  }),
  post: (payload) => ({
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(payload)
  })
};

export default http;
