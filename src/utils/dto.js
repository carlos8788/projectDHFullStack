const path = require('path')
const constructProductFromRequest = req => {
    const {
        productName,
        description,
        price,
        stock,
        category,
        color,
        size,
        brand,
    } = req.body;

    if (!req.file) {
        throw new Error("File is missing!");
    }

    const pathImg = extractImagePath(req.file.path);
    
    return {
        name_product: productName,
        description: description,
        price: Number(price),
        stock: Number(stock),
        id_category: Number(category),
        id_color: Number(color),
        id_size: Number(size),
        id_brand: Number(brand),
        image: pathImg
    };
};

const extractImagePath = fullPath => {
    const partPath = fullPath.split('\\');
    const pathImgParts = partPath.splice(5, partPath.length);
    return path.join(...pathImgParts);
};

const toProductData = product => {
    return {
        id_product: product.id_product,
        name_product: product.name_product,
        description: product.description,
        price: product.price,
        stock: product.stock,
        image: product.image,
        category: product.category.name,
        color: product.color.name,
        size: product.size.name,
        brand: product.brand.name
    };
}

module.exports = {
    constructProductFromRequest,
    toProductData
};