const authUrl = 'http://localhost:3000/auth';

const authProvider = {
    login: ({ username, password }) => {
      const request = new Request(`${authUrl}/sign_in`, {
        method: 'POST',
        body: JSON.stringify({ email: username, password: password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      return fetch(request)
        .then(response => {
          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
          return response.headers;
        })
        .then(headers => {
          const credentials = {
            'token': headers.get('access-token'),
            'client': headers.get('client'),
            'uid': headers.get('uid'),
          }
          localStorage.setItem('auth', JSON.stringify(credentials));
        });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('auth')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authProvider;
