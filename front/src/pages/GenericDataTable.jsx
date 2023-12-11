// import React from 'react';
// import GenericDataTable from './GenericDataTable';
// import { useProducts } from '../hooks/useProducts';
// import { useUsers } from '../hooks/useUsers';
// // import { useCarts } from '../hooks/useCarts'; // Asumiendo que tienes un hook para carritos

// const DataTable = ({ dataType }) => {
//   let data = [];
//   let loading = true;
//   let error = null;
//   let columnConfig = [];

//   // Dependiendo del dataType, usamos un hook u otro y configuramos las columnas
//   if (dataType === 'products') {
//     ({ data, loading, error } = useProducts());
//     columnConfig = [
//       // Configuración de las columnas para productos
//     ];
//   } else if (dataType === 'users') {
//     ({ users, loading, error } = useUsers());
//     columnConfig = [
//       // Configuración de las columnas para usuarios
//     ];
//   } 
//   // else if (dataType === 'carts') {
//   //   ({ data, loading, error } = useCarts());
//   //   columnConfig = [
//   //     // Configuración de las columnas para carritos
//   //   ];
//   // }

//   // Manejadores genéricos para editar y eliminar
//   const handleEdit = (id) => {
//     console.log(`Editar ${dataType} con ID:`, id);
//     // Implementar lógica de edición basada en dataType
//   };

//   const handleDelete = (id) => {
//     console.log(`Eliminar ${dataType} con ID:`, id);
//     // Implementar lógica de eliminación basada en dataType
//   };

//   // Si hay cargando o error, renderizamos eso
//   if (loading) return <div>Cargando...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   // Renderizamos el componente de tabla genérico con los datos y configuraciones adecuadas
//   return (
//     <GenericDataTable
//       data={data}
//       columnConfig={columnConfig}
//       onEdit={handleEdit}
//       onDelete={handleDelete}
//     />
//   );
// };

// export default DataTable;
