const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');
const { extractImagePath } = require('../utils/dto')
const { hashPassword, verifyPassword } = require('../utils/hashPassword')
const db = require('../database/models/')
const sequelize = db.sequelize

module.exports = {
    viewRegister: (req, res) => {

        return res.render('register')
    },

    register: async (req, res) => {
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
        const hashPass = await hashPassword(user.password)
        const newUser = {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: hashPass,
            avatar: req.file.filename
        }
        console.log(newUser)
        const query = await db.User.create(newUser)
        console.log(query)
        return res.render('login')
    },

    login: (req, res) => {
        return res.render('login')
    },

    loginProcess: async (req, res) => {

        let { email, password } = req.body

        // console.log(user);

        // // const userWithoutPassword = {
        // //     id: user.id,
        // //     username: user.username,
        // //     email: user.email

        // // };
        // req.user = user
        // console.log(req.user);
        // const token = jwt.sign({ user: user.email }, 'riverEsVida', { expiresIn: '1h' });
        // console.log(token);
        // res.cookie('auth_token', token);
        // res.redirect('/');

        if (email === 'admin@river.com' && password === '123456') {
            // Credenciales de superadmin
            const token = jwt.sign({ role: 'superadmin' }, 'riverEsVida', { expiresIn: '1h' });
            res.cookie('auth_token', token, { httpOnly: true, secure: true });
            console.log('admin')
            return res.redirect('/');
        } else {
            // Busca al usuario en la base de datos
            try {
                const user = await db.User.findOne({ where: { email } });
                console.log(user)
                if (user && verifyPassword(password, user.password)) {
                    // Credenciales de usuario normal
                    const token = jwt.sign({ role: 'user', userId: user.id }, 'riverEsVida', { expiresIn: '1h' });
                    res.cookie('auth_token', token, { httpOnly: true, secure: true });
                    return res.redirect('/');
                } else {
                    // Credenciales incorrectas
                    return res.status(401).send('Credenciales inválidas');
                }
            } catch (error) {
                console.error(error);
                return res.status(500).send('Error interno del servidor');
            }
        }
    },
    profile: (req, res) => {
        if (!req.user) return res.redirect('/user/login')
        console.log(req.user);
        return res.render('profile', { user: req.user })
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