const jwt = require('jsonwebtoken');

module.exports = {
    authenticate: (req, res, next) => {
        const token = req.cookies.auth_token;
        if (!token) {
            return res.status(401).redirect('/user/login');
        }
        try {
            jwt.verify(token, 'riverEsVida');
            next();
        } catch (err) {
            return res.status(401).send('Token inválido');
        }
    },

    isLogged: (req, res, next) => {
        const token = req.cookies.auth_token;
        if (token) {
            console.log('logueado');
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
        try {
            if (req.cookies.auth_token) {
                const token = req.cookies.auth_token;
                req.user = jwt.verify(token, 'riverEsVida');
                res.locals.user = req.user || null;
            } else {
                res.locals.user = null;
            }
            next();
        } catch (error) {

            if (error instanceof jwt.TokenExpiredError) {
                res.clearCookie('auth_token');
                res.locals.user = null;
                next();
            } else {
                next(error);
            }
        }
    }

}
