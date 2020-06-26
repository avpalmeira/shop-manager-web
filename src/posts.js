import React from 'react';
import { Edit, EditButton, Create, SimpleForm, ReferenceInput, SelectInput, TextInput } from 'react-admin';
import { List, Datagrid, ReferenceField, TextField, SimpleList } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const PostTitle = ({record}) => (
  <span>Post {record ? `${record.title}` : ''}</span>
);

export const PostList = props => {
	const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
	return (
		<List {...props}>
			{isSmallScreen ? (
				<SimpleList
					primaryText={record => record.title}
				/>
			) : (
				<Datagrid>
					<TextField source="id" />
						<ReferenceField source="userId" reference="users">
							<TextField source="name" />
						</ReferenceField>
						<TextField source="title" />
						<EditButton/>
				</Datagrid>
			)
			}
		</List>
	);
}

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
