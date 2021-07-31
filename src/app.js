const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const myConnection = require('express-myconnection');
const session = require('express-session');
const path = require('path');
const mysql = require('mysql');

const app = express();

// Importing routes...
const customerRoutes = require('./routes/customer.routes');

// Settings...
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares...
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(session({
    secret: 'cat on keyboard',
    resave: false,
    saveUninitialized: true
}));

app.use(myConnection(
    mysql,
    {
        host: 'localhost',  // Change this line and put the host url.
        user: '',           // Change this line and put the username.
        password: '',       // Change this line and put the password.
        port: 3306,         // Change this line and put the mysql port.
        database: 'crud_nodejs_mysql',
    },
    'single'
));


// Routes...
app.use('/', customerRoutes);

// Static files...
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server...
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')} --> (http://localhost:${app.get('port')}))`);
});
