const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const connection = require('express-myconnection');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');

const dbConfig = require('./config/db.config');
const customerRoutes = require('./routes/customer.routes');

const app = express();

// Settings...
app.set('port', process.env.PORT || 3000);          // Set the connection port
app.set('view engine', 'ejs');                      // Set EJS as the template engine
app.set('views', path.join(__dirname, 'views'));    // Set the path of views folder

// Middlewares...
app.use(morgan('dev'));                             // HTTP request logger middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));                 // Allows forms to use PUT and DELETE queries
app.use(session({
    secret: 'cat on keyboard',
    resave: false,
    saveUninitialized: true
}));
app.use(connection(mysql, dbConfig, 'single'));     // MySQL Connection

// Routes...
app.use('/', customerRoutes);

// Static files path...
app.use(express.static(path.join(__dirname, '../public')));

// Starting the server...
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')} --> (http://localhost:${app.get('port')}))`);
});
