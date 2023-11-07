const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');

module.exports = {
    viewRegister: (req, res) => {
        
        return res.render('register')
    },

    register: (req, res) => {
        const errors = validationResult(req)
        const user = req.body
        console.log(user);
        console.log(req.file.path);

        if (!errors.isEmpty()) {
            console.log(errors.array());
            return res.render(
                'register',
                {
                    errors: errors.mapped(),
                    old: req.body
                })
        }

        const newUser = {
            
        }

        return res.render('login')
    },

    login: (req, res) => {
        return res.render('login')
    },

   loginProcess: (req, res) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.render('login', {
                errors: errors.array(),
                old: req.body
            });
        }
        // const userWithoutPassword = {
        //     id: user.id,
        //     username: user.username,
        //     email: user.email

        // };
        req.user = user
        console.log(req.user);
        const token = jwt.sign({ user: user.email }, 'riverEsVida', { expiresIn: '1h' });
        console.log(token);
        res.cookie('auth_token', token);
        res.redirect('/');
    },
    profile: (req, res) => {
        if(!req.user) return res.redirect('/user/login')
        console.log(req.user);
        return res.render('profile', {user: req.user})
    },

    logout: (req, res) => {
        try {

            res.clearCookie('auth_token');
            res.redirect('/');

        } catch (error) {
            console.log(error);
        }
    }
}