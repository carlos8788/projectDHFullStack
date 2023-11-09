const path = require('path');
const multer = require('multer');
const { root } = require('../utils/rootPath')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = (req.path === '/register') ? 'profiles' : 'products';
        cb(null, path.join(root, '..', 'public', 'images', folder))
    },
    filename: (req, file, cb) => {
        try {
            const name = (req.path === '/register') ? req.body.username : req.body.productName;
            const fileName = `${name}_img${path.extname(file.originalname)}`;
            cb(null, fileName)
        } catch (error) {
            console.log(error);
        }


    }
})

module.exports = multer({ storage })


