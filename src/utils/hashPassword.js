const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    if(password.length > 8){
        let hash = await bcrypt.hash(password, 10)
        return hash
    }
    return 'Password not valid'
}


const password = 'CONTRA';
const hash = '';


let crear = await hashPassword(password)
console.log(crear);

let rsul = await bcrypt.compare(password, crear)
console.log(rsul)