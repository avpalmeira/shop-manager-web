import React from 'react';
import { Edit, Create, Filter, SimpleForm, ReferenceInput, SelectInput, TextInput } from 'react-admin';
import { List, Datagrid, ReferenceField, TextField } from 'react-admin';

const PostTitle = ({record}) => (
  <span>Post {record ? `${record.title}` : ''}</span>
);

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn/>
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
);

export const PostList = props => (
  <List filters={<PostFilter/>} {...props}>
  <Datagrid rowClick="edit">
    <TextField source="id" />
    <ReferenceField source="userId" reference="users">
      <TextField source="name" />
    </ReferenceField>
    <TextField source="title" />
  </Datagrid>
</List>
);

export const PostEdit = props => (
  <Edit title={<PostTitle/>} {...props}>
  <SimpleForm>
    <ReferenceInput source="userId" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <TextInput source="title" />
    <TextInput multiline source="body" />
  </SimpleForm>
</Edit>
);

export const PostCreate = props => (
<Create {...props}>
  <SimpleForm>
    <ReferenceInput source="userId" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <TextInput source="title" />
    <TextInput multiline source="body" />
  </SimpleForm>
</Create>
);
