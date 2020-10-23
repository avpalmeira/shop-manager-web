import React from 'react';
import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton, 
  Filter,
  ImageField,
  ImageInput,
  List,
  NumberInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleList,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


const ProductTitle = ({record}) => (
  <span>Product: {record ? `${record.name}` : ''}</span>
);

const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const ProductList = props => {
	const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
	return (
    <List filters={<ProductFilter />} {...props}>
			{isSmallScreen ? (
				<SimpleList
					primaryText={record => record.name}
					secondaryText={record => record.quantity}
				/>
			) : (
				<Datagrid>
					<TextField source="id" />
          <TextField source="name" />
          <TextField source="quantity" />
          <ShowButton/>
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
    <ImageInput source="photo" accept="image/*">
      <ImageField source="src" />
    </ImageInput>
  </SimpleForm>
</Edit>
);

export const ProductCreate = props => (
<Create {...props}>
  <SimpleForm>
    <TextInput source="name" />
    <NumberInput source="quantity" />
    <ImageInput source="photo" accept="image/*">
      <ImageField source="src" />
    </ImageInput>
  </SimpleForm>
</Create>
);

export const ProductShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="quantity" />
      <TextField source="code" />
      <ImageField source="photo" />
    </SimpleShowLayout>
  </Show>
);
