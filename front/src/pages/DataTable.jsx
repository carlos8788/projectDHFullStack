import React from 'react';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';
import { useCarts } from '../hooks/useCarts'; // Asumiendo que tienes hooks similares para carritos y usuarios
import { useUsers } from '../hooks/useUsers';
import TablaProducts from './TablaProducts';
import Tablausers from './TableUsers';
import TablaCarts from './TablaCarts';

const DataTable = ({ dataType }) => {


    if (dataType === 'products') {
        const { products, loading: productsLoading, error: productsError, read } = useProducts();

        return (
            <TablaProducts data={products} loading={productsLoading} error={productsError} getProductId={read} />
        )
    } else if (dataType === 'carts') {
        const { carts, loading, error, readCart } = useCarts();
        return (
            <TablaCarts data={carts} loading={loading} error={error} getCart={readCart} />
        )
    } else if (dataType === 'users') {
        const {
            users,
            loading,
            error,
            readUser
        } = useUsers();
        return <Tablausers data={users} loading={loading} error={error} getUser={readUser}/>
    }

};

export default DataTable;


// DataTable.js
// import React from 'react';
// import { useUsers } from '../hooks/useUsers'; // Usa el hook para usuarios
// import GenericDataTable from './GenericDataTable';

// const DataTable = ({ dataType }) => {
//   const { users, loading, error } = useUsers(); // O usa el hook respectivo según dataType
//   const columnConfig = [
//     { field: 'id', headerName: 'ID' },
//     { field: 'name', headerName: 'Nombre' },
//     // Agrega aquí más configuraciones de columnas según los campos de tus usuarios
//   ];
// //   console.log(data)

//   const handleEdit = (id) => {
//     console.log('Editar usuario con ID:', id);
//     // Lógica para editar
//   };

//   const handleDelete = (id) => {
//     console.log('Eliminar usuario con ID:', id);
//     // Lógica para eliminar
//   };

//   if (loading) return <div>Cargando...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <GenericDataTable
//       data={users}
//       columnConfig={columnConfig}
//       onEdit={handleEdit}
//       onDelete={handleDelete}
//     />
//   );
// };

// export default DataTable;

