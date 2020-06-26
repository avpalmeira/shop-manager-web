import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { UserList } from './users';
import { PostList, PostCreate, PostEdit } from './posts';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const apiURL = 'https://jsonplaceholder.typicode.com';
const dataProvider = jsonServerProvider(apiURL);
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} icon={UserIcon}/>
    <Resource name="posts" list={PostList} create={PostCreate} icon={PostIcon} edit={PostEdit}/>
  </Admin>
);

export default App;
