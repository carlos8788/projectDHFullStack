const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        if (password.length > 8) {
            let hash = await bcrypt.hash(password, 10)
            return hash
        }

    } catch (error) {
        return error
    }
    // return 'Password not valid'
}

const verifyPassword = async (password, passwordDB) => await bcrypt.compare(password, passwordDB)

// const password = 'CONTRA';
// const hash = '';


// let crear = await hashPassword(password)
// console.log(crear);

// let rsul = await bcrypt.compare(password, crear)
// console.log(rsul)

module.exports = {
    hashPassword,
    verifyPassword
}