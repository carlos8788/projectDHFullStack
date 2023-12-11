// const sequelize = require('../database/config/config');
// const Sequelize = require('sequelize');  // Asegúrate de requerir Sequelize para usar DataTypes
const {toProductData} = require('../utils/dto')
const db = require('../database/models/')
const sequelize = db.sequelize

const mainController = {

    cartDetail: (req, res) => {
        return res.render('productCart')
    },

}

module.exports = mainController