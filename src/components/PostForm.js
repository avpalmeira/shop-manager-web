import React from 'react';
import { SimpleForm, ReferenceInput, SelectInput, TextInput } from 'react-admin';

export const PostForm = (props) => (
  <SimpleForm>
    <ReferenceInput source="userId" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <TextInput source="title" />
    <TextInput multiline source="body" />
  </SimpleForm>
);
