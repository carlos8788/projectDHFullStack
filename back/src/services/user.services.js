const path = require('node:path')
const {readFileSync, writeFileSync} = require('node:fs');


const file = path.join(__dirname, '..', 'data', 'products.json')

module.exports = {
    getProducts: () => JSON.parse(readFileSync(file, 'utf-8')),
    addProduct: (products) => writeFileSync(file, JSON.stringify(products,  null, 2))
}