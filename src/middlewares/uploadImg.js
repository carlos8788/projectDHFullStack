const path = require('path');
const multer = require('multer');
const { root } = require('../utils/rootPath')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(root, '..', 'public', 'images', 'profiles'))
    },
    filename: (req, file, cb) => {
        try {
            console.log(file);
            const fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
            console.log(req.user);
            cb(null, fileName)
        } catch (error) {
            console.log(error);
        }


    }
})

module.exports = multer({ storage })


