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
} from './components/products';
import Dashboard from './Dashboard';
import authProviderBuilder from './services/authProvider';
import dataProviderBuilder from './services/dataProvider';

const apiUrl = process.env.REACT_APP_API_URL;
const authUrl = `${apiUrl}/auth`;

const dataProvider = dataProviderBuilder(apiUrl);
const authProvider = authProviderBuilder(authUrl);

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
