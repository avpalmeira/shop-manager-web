import React from 'react';
import {
  EditButton, 
  DeleteButton,
  Edit,
  Create,
  SimpleForm,
  NumberInput,
  TextInput 
} from 'react-admin';
import { List, Datagrid, TextField, SimpleList } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


const ProductTitle = ({record}) => (
  <span>Product {record ? `${record.name}` : ''}</span>
);

export const ProductList = props => {
	const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
	return (
		<List {...props}>
			{isSmallScreen ? (
				<SimpleList
					primaryText={record => record.name}
				/>
			) : (
				<Datagrid>
					<TextField source="id" />
          <TextField source="name" />
          <EditButton/>
          <DeleteButton/>
				</Datagrid>
			)
			}
		</List>
	);
}

export const ProductEdit = props => (
<Edit title={<ProductTitle/>} {...props}>
  <SimpleForm>
    <TextInput source="name" />
    <NumberInput source="quantity" />
  </SimpleForm>
</Edit>
);

export const ProductCreate = props => (
<Create {...props}>
  <SimpleForm>
    <TextInput source="name" />
    <NumberInput source="quantity" />
  </SimpleForm>
</Create>
);
