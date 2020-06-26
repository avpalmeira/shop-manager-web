import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import CustomUrlField from './components/CustomUrlField';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <CustomUrlField source="website" />
      <TextField label="Company" source="company.name" />
    </Datagrid>
  </List>
);
