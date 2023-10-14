const express = require('express');
const app = express();
const routerMain = require('./routes/mainRoute')
const routerProduct = require('./routes/productRoute');
const routerUser = require('./routes/userRoutes');
const {root} = require('./utils/rootPath')
const path = require('path');
const cookieParser = require('cookie-parser');

const {userMiddleware} = require('./middlewares/authenticate')

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

app.listen(PORT, ()=>{
    console.log(`PORT: ${PORT}`);
    
});
