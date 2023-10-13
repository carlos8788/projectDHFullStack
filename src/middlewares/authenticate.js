const jwt = require('jsonwebtoken');

module.exports = {
    authenticate: (req, res, next) => {
        const token = req.cookies.auth_token;
        if (!token) {
            return res.status(401).redirect('/user/login');
        }
        try {
            const user = jwt.verify(token, 'riverEsVida');
            req.user = user;
            next();
        } catch (err) {
            return res.status(401).send('Token inválido');
        }
    },
    isLogged: (req, res, next) => {
        const token = req.cookies.auth_token;
        if (token) {
            try {
                jwt.verify(token, 'riverEsVida');

                return res.redirect('/');
            } catch (err) {

                res.clearCookie('auth_token');
                next();
            }
        } else {
            next();
        }
    },
    userMiddleware: (req, res, next) => {
        if (req.cookies.auth_token) {
            const token = req.cookies.auth_token;
            const user = jwt.verify(token, 'riverEsVida');
            req.user = user;

            if (req.user) {
                res.locals.user = req.user;
            } else {
                res.locals.user = null;
            }
            next();
        } else {
            res.locals.user = null;
            next()
        }
    }
}

