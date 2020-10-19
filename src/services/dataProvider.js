import { fetchUtils } from 'react-admin';
// import { stringify } from 'query-string';

const apiUrl = 'http://localhost:3000/api/v1';
const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {
    // const { page, perPage } = params.pagination;
    // const { field, order } = params.sort;
    // const query = {
    //     sort: JSON.stringify([field, order]),
    //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    //     filter: JSON.stringify(params.filter),
    // };
    const url = `${apiUrl}/${resource}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      // total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }));
  },

  getOne: (resource, params) =>
  httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
    data: json,
  })),

  update: (resource, params) =>
  httpClient(`${apiUrl}/${resource}/${params.id}`, {
    method: 'PUT',
    body: JSON.stringify(params.data),
  }).then(({ json }) => ({ data: json })),

  create: (resource, params) =>
  httpClient(`${apiUrl}/${resource}`, {
    method: 'POST',
    body: JSON.stringify(params.data),
  }).then(({ json }) => ({
    data: { ...params.data, id: json.id },
  })),

  delete: (resource, params) =>
  httpClient(`${apiUrl}/${resource}/${params.id}`, {
    method: 'DELETE',
  }).then(({ json }) => ({ data: json })),
};
