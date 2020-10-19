import React from 'react';
import { 
  Admin, 
  Resource,
  fetchUtils,
} from 'react-admin';
import BasketIcon from '@material-ui/icons/ShoppingBasket';
import { 
  ProductList, 
  ProductEdit,
  ProductCreate,
  ProductShow,
} from './products';
import Dashboard from './Dashboard';
import authProvider from './services/authProvider';
import simpleRestProvider from 'ra-data-simple-rest';

const url = 'http://localhost:3000'; // URL to ShopManager API
// const url = 'http://localhost:3000/api/v1'; // URL to Affiliates API

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

const dataProvider = simpleRestProvider(url, httpClient);

const App = () => (
  <Admin 
    dashboard={Dashboard} 
    authProvider={authProvider} 
    dataProvider={dataProvider}
  >
    <Resource 
      name="products" 
      list={ProductList} 
      edit={ProductEdit}
      create={ProductCreate}
      show={ProductShow}
      icon={BasketIcon} 
    />
  </Admin>
);

export default App;
