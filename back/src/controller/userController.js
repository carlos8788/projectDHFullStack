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
            return res.redirect('http://localhost:5173');
        } else {

            try {
                const user = await db.User.findOne({ where: { email } });
                if (user && await verifyPassword(password, user.password)) {
                    
                    req.session.user = {
                        id: user.id_user,
                        username: user.username,
                        fullName: `${user.first_name} ${user.last_name}`,
                        email: user.email,
                        avatar: user.avatar
                    }
                    
                    const token = jwt.sign({ role: 'user', userId: user.id }, 'riverEsVida', { expiresIn: '1h' });
                    res.cookie('auth_token', token, { httpOnly: true, secure: false });

                    return res.redirect('/');
                } else {
                    return res.render('login', {
                        errors: {
                            login: { msg: 'Credenciales inválidas o error de inicio de sesión.' },
                            email: { msg: 'Formato de correo inválido.' }, 
                            password: { msg: 'La contraseña no puede estar vacía.' } 
                        }
                    });
                }
            } catch (error) {
                console.error(error);
                return res.render('login', { errors: { msg: 'Error interno del servidor' } });
            }
        }
    },
    profile: (req, res) => {
        console.log(req.session.user, 'profile')
        if (!req.session.user) return res.redirect('/user/login')

        return res.render('profile', { user: req.session.user })
    },

    logout: (req, res) => {
        try {

            res.clearCookie('auth_token');
            res.redirect('/');

        } catch (error) {
            console.error(error);
        }
    }
}