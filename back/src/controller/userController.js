const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');
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
        
        const userExists = await db.User.findOne({
            where: {
                email: user.email
            },
            raw: true,
        })

        if (userExists) {
            errors.errors.push({
                value: req.body.email,
                msg: 'El correo electrónico ya está en uso',
                param: 'email',
                location: 'body'
            });
        }

        const usernameExists = await db.User.findOne({ where: { username: user.username } });
        if (usernameExists) {

            errors.errors.push({
                value: req.body.username,
                msg: 'El nombre de usuario ya está en uso',
                param: 'username',
                location: 'body'
            });
        }

        if (!errors.isEmpty()) {

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

        const query = await db.User.create(newUser)
        console.log(query)
        return res.render('login')
    },

    login: (req, res) => {
        return res.render('login')
    },

    loginProcess: async (req, res) => {

        let { email, password } = req.body

        if (email === 'admin@river.com' && password === '123456') {
            const token = jwt.sign({ role: 'superadmin' }, 'riverEsVida', { expiresIn: '1h' });
            res.cookie('auth_token', token, { httpOnly: true, secure: true });
            return res.redirect('/');
        } else {

            try {
                const user = await db.User.findOne({ where: { email } });
                if (user && verifyPassword(password, user.password)) {

                    const token = jwt.sign({ role: 'user', userId: user.id }, 'riverEsVida', { expiresIn: '1h' });
                    res.cookie('auth_token', token, { httpOnly: true, secure: true });
                    return res.redirect('/');
                } else {
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