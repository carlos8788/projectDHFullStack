const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async (password) => {
    let hash = await bcrypt.hash(password, 10)
    return hash
}


const password = 'CONTRA';
const hash = '';


let crear = await hashPassword(password)
console.log(crear);

let rsul = await bcrypt.compare(password, crear)
console.log(rsul)