import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = (apiUrl) => {

  const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }

    const auth = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('client', auth.client);
    options.headers.set('access-token', auth.token);
    options.headers.set('uid', auth.uid);

    return fetchUtils.fetchJson(url, options);
  };

  const simpleProvider = simpleRestProvider(apiUrl, httpClient);

  const loadDataToForm = (data) => {
    const formData = new FormData();

    formData.append('name', data['name']);
    formData.append('quantity', data['quantity']);
    if (data['photo'] != null) {
      formData.append('photo', data['photo'].rawFile);
    }
    return formData;
  }

  return {
    ...simpleProvider,

    update: (resource, params) => {
      return httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: 'PUT',
        body: loadDataToForm(params.data),
      }).then(({ json }) => ({ data: json }))
    },

    create: (resource, params) => {
      return httpClient(`${apiUrl}/${resource}`, {
        method: 'POST',
        body: loadDataToForm(params.data),
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }))
    },
  };
};

export default dataProvider;
