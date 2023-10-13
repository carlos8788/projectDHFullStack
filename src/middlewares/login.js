
module.exports = {
    checkLogin: (req, res, next) => {
        if (req.session && req.session.user) {
            req.user = req.session.user;

            if (req.user.password) {
                delete req.user.password;
            }
            if (!req.cookies.user_sid) {
                res.cookie('user_sid', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
            }
            next();
        } else {

            next();
        }
    },

    isAuthenticated: (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/login');
        }
    }


}

