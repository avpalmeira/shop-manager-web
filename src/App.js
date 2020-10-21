import React from 'react';
import { 
  Admin, 
  Resource,
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
import customDataProvider from './services/dataProvider';

const url = 'http://localhost:3000'; // URL to ShopManager API
// const url = 'http://localhost:3000/api/v1'; // URL to Affiliates API

const dataProvider = customDataProvider(url);

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
