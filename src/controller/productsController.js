const fs = require("fs");
const path = require("path");
let productos = []; //Aqui se almacenaran los productos

function cargarProductos(){
    try{
        const filePath = path.join(__dirname, '..', 'database', 'products.json');
        const data = fs.readFileSync(filePath,"utf-8");
        productos = JSON.parse(data);
        //probando si cargan los productos pueden borrarlo si quieren
        console.log("Productos cargados con exito");
    }catch (error){
        //en caso de que no carguen productos acá saldra el error
        console.error("Error al cargar el producto",error);
    }
}

function obtenerProductos(){
    return productos;
}

cargarProductos();

module.exports = {
    obtenerProductos,
};