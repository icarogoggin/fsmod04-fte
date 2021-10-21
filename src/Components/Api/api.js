import { JwtHandler } from '../jwt-handler/JwtHandler';

export const Api = {
  baseUrl: 'https://fsmod04-back.herokuapp.com/',

  // Endpoint - Game

  readAllUrl: () => Api.baseUrl + '/games',

  readByIdUrl: (id) => Api.baseUrl + '/games/' + id,

  createGameUrl: () => Api.baseUrl + '/games',

  updateUrl: (id) => Api.baseUrl + '/games/' + id,

  deleteUrl: (id) => Api.baseUrl + '/games/' + id,

  //Endpoint - Login

  loginUrl: () => Api.baseUrl + '/login',

  // Endpoint - User

  readByUserIdUrl: (id) => Api.baseUrl + '/users/' + id,

  createUserUrl: () => Api.baseUrl + '/users',

  updateUserUrl: (id) => Api.baseUrl + '/users/' + id,

  deleteUserUrl: (id) => Api.baseUrl + '/users/' + id,

  // Endpoint - Profile

  readAllProfileUrl: () => Api.baseUrl + '/profiles',

  readByProfileIdUrl: (id) => Api.baseUrl + '/profiles/' + id,

  createProfileUrl: () => Api.baseUrl + '/profiles',

  updateProfileUrl: (id) => Api.baseUrl + '/profiles/' + id,

  deleteProfileUrl: (id) => Api.baseUrl + '/profiles/' + id,

  // Endpoint - Genres

  readAllGenreUrl: () => Api.baseUrl + '/genres',

  readAllGenreWithGamesUrl: () => Api.baseUrl + '/genres/withGames',

  readByIdGenreWithGamesUrl: (id) => Api.baseUrl + `/genres/${id}/withGames`,

  readByIdGenreUrl: (id) => Api.baseUrl + '/genres/' + id,

  createGenreUrl: () => Api.baseUrl + '/genres',

  updateGenreUrl: (id) => Api.baseUrl + '/genres/' + id,

  // Auth Header

  authHeader: () => ({
    Authorization: 'Bearer ' + JwtHandler.getJwt(),
  }),

  // GET
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: 'GET',
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),

  // POST
  buildApiPostRequest: (url, body, auth) =>
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json',
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
      method: 'PATCH',
      headers: new Headers({
        'Content-type': 'application/json',
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // DELETE
  buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
      method: 'DELETE',
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),
};
