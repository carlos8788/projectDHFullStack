const { validationResult } = require('express-validator')

module.exports = {
    viewRegister: (req, res) => {

        return res.render('register')
    },

    register: (req, res) => {
        const errors = validationResult(req)
        const user = req.body
        console.log(user);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return res.render(
                'register',
                {
                    errors: errors.mapped(),
                    old: req.body
                })
        }
        return res.render('login')
    },

    login: (req, res) => {
        return res.render('login')
    },

    logout: (req, res) => {
        return res.render('login')
    }
}