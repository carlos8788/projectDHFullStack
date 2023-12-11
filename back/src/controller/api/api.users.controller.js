const db = require('../../database/models')

const apiUsersController = {
    allUser: async (req, res) => {
        try {
            const usersDB = await db.User.findAll({
                raw: true
            });
            
            const users = usersDB.map((user) => {
                return {
                    id: user.id_user,
                    name: user.username,
                    email: user.email,
                    url: '/'
                }
            })

            const data = {
                count: usersDB.length,
                users
            }
            console.log(data)

            return res.json(data)
        } catch (error) {
            console.log(error);
        }

    },
    getUser: async (req, res) => {
        try {
            const user = await db.User.findOne({
                where: { id: req.params.id },
                raw: true
            })
            delete user.password
            console.log(user)
            return res.json(user)
        } catch (error) {
            return res.json(error.message)
        }
    },

}

module.exports = apiUsersController