export const Api = {
  baseUrl: "http://localhost:3000",

  // Endpoint - Game

  readAllUrl: () => Api.baseUrl + "/games",

  readByIdUrl: (id) => Api.baseUrl + "/games/" + id,

  createGameUrl: () => Api.baseUrl + "/games",

  updateUrl: (id) => Api.baseUrl + "/games/" + id,

  // GET
  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),

  // POST
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url, body) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    }),
};
