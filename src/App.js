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
} from './products';
import Dashboard from './Dashboard';
import authProvider from './services/authProvider';
import simpleRestProvider from 'ra-data-simple-rest';

// URL to ShopManager API
const url = 'http://localhost:3000';
// URL to Affiliates API
// const url = 'http://localhost:3000/api/v1';

const App = () => (
  <Admin 
    dashboard={Dashboard} 
    authProvider={authProvider} 
    dataProvider={simpleRestProvider(url)}
  >
    <Resource 
      name="products" 
      list={ProductList} 
      edit={ProductEdit}
      create={ProductCreate}
      icon={BasketIcon} 
    />
  </Admin>
);

export default App;
