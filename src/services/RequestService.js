import { ACCESS_TOKEN, USER_DATA, API_BASE_URL } from '../constants';

export const request = (options) => {
  const headers = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    }),
  );
};

export function getCourse(){
    const response = request({
        url: API_BASE_URL + '/course',
        method: 'GET',
    })

    return response;
}

export function getCurrentUser() {

  const response = request({
    url: API_BASE_URL + '/user/me',
    method: 'GET',
  });

  response.then((user) =>
    localStorage.setItem(USER_DATA, JSON.stringify(user)),
  );
  return response;
}

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + '/auth/login',
    method: 'POST',
    body: JSON.stringify(loginRequest),
  });
}

export function signup(signupRequest) {
  return request({
    url: API_BASE_URL + '/auth/signup',
    method: 'POST',
    body: JSON.stringify(signupRequest),
  });
}

export function logout() {
  if (typeof window === 'undefined') {
    return;
  }
  getCurrentUser().then((user) => {
    const postLogoutRedirectUri = window.location.origin;
    const logoutUri = `${API_BASE_URL}/auth/logout/${
      user.provider
    }?postLogoutRedirectUri=${postLogoutRedirectUri}`;
    window.location.href = logoutUri;
  });
}