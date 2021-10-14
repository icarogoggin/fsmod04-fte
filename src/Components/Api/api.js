export const Api = {
  baseUrl: 'http://localhost:3000',

  // Endpoint - Game

  readAllUrl: () => Api.baseUrl + '/games',

  readByIdUrl: (id) => Api.baseUrl + '/games/' + id,

  createGameUrl: () => Api.baseUrl + '/games',

  updateUrl: (id) => Api.baseUrl + '/games/' + id,

  deleteUrl: id => Api.baseUrl + "/games/" + id,
  
  // Endpoint - User

  readByUserIdUrl: (id) => Api.baseUrl + '/users/' + id,

  createUserUrl: () => Api.baseUrl + '/users',

  updateUserUrl: (id) => Api.baseUrl + '/users/' + id,

  deleteUserUrl: id => Api.baseUrl + '/users/' + id,

  // Endpoint - Profile

  readAllProfileUrl: () => Api.baseUrl + '/profiles',

  readByProfileIdUrl: (id) => Api.baseUrl + '/profiles/' + id,

  createProfileUrl: () => Api.baseUrl + '/profiles',

  updateProfileUrl: (id) => Api.baseUrl + '/profiles/' + id,

  deleteProfileUrl: id => Api.baseUrl + '/profiles/' + id,

  // GET
  buildApiGetRequest: (url) =>
    fetch(url, {
      method: 'GET',
    }),

  // POST
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json',
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url, body) =>
    fetch(url, {
      method: 'PATCH',
      headers: new Headers({
        'Content-type': 'application/json',
      }),
      body: JSON.stringify(body),
    }),

  // DELETE
  buildApiDeleteRequest: (url) =>
    fetch(url, {
      method: 'DELETE',
    }),
};
