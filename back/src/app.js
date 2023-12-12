const express = require('express');
const app = express();
const routerMain = require('./routes/mainRoute')
const routerProduct = require('./routes/productRoute');
const routerUser = require('./routes/userRoutes');
const routerCart = require('./routes/cartRoute');
const apiRouterProduct = require('./routes/api/api.products.route')
const apiRouterUser = require('./routes/api/api.users.route')
const apiRouterCart = require('./routes/api/api.carts.route')

const { root } = require('./utils/rootPath')
const path = require('path');
const cookieParser = require('cookie-parser');

const { userMiddleware } = require('./middlewares/authenticate')
const cors = require('cors');

const session = require('express-session');

app.use(session({
  secret: 'tuSecreto',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 } 
}));


const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userMiddleware)


const PORT = 3000

app.set('view engine', 'ejs');
app.set('views', path.join(root, 'views'));

app.use('/', routerMain)
app.use('/product', routerProduct)
app.use('/user', routerUser)
app.use('/cart', routerCart)

app.use('/api/users', apiRouterUser)
app.use('/api/products', apiRouterProduct)
app.use('/api/carts', apiRouterCart)


app.use((req, res, next) => {
  res.status(404).render('404');
});

app.use((err, req, res, next) => {
  if (err.status === 401) {
      res.status(401).render('401');
  } else {
      next(err);
  }
});

app.listen(PORT, () => {

  console.log(`PORT: ${PORT}`);

});
