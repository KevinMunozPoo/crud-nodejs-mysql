# Basic CRUD using Node.Js, Express and MySQL
<img src="https://i.imgur.com/sA9D8J9.png" alt="Logo" height="235">

 

## 0 - Pre-reqs 📋 
To run this project locally you will need a few things:
- Install [Git](https://git-scm.com/)
- Install [Node.js](https://nodejs.org/)
- Install [MySQL](https://www.mysql.com/)

 

## 1 - Download 📥
To download this project, you can use the following command.
```
git clone https://github.com/KevinMunozPoo/crud-nodejs-mysql
```

 

## 2 - Installation 💻
Now you must install the project dependencies and start the database.
 
#### 2.1 Installing the dependencies ⌛️
Access the folder and install the project dependencies using npm.
```
cd crud-nodejs-mysql
npm install
```

 

#### 2.2 Connecting to MySQL server 🔑
To connect to your local MySQL server, you have to use your username, it must match the one you put when installing MySQL (the default user is usually *root*).
```
mysql -h localhost -u root -p
```
Then the system will ask you to enter your password, just type it and press enter.

 

#### 2.3 Creating the database and the table 📁
The next step will be to create the database needed to run this project.
```
CREATE DATABASE crud_nodejs_mysql;
```

To use the database...
```
USE crud_nodejs_mysql;
```

Now you need to create a table, this is where your data will be stored.
```
CREATE TABLE customers ( 
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(18)
);
```

 

## 3 - Configuration ⚙️
And once the project is installed, you have to configure it to use the database.

You have to go to the folder "**src/config/**" and edit file "**db.config.js**" which is located in that folder. Inside, put your MySQL username and password so the project can access the database. For example:
```sh
const dbConfig = {
    host: 'localhost',
    user: '<your user>',
    password: '<your password>',
    port: 3306,
    database: 'crud_nodejs_mysql',
};
```

 

## 4 - All done 🚀
To start the project, you can use the following command.
```sh
npm run start
```
 

___
 

### About the author 🙂
**Kevin Muñoz Poo**, Web Developer
- <span>[LinkedIn](https://www.linkedin.com/in/kevin-munoz-poo/)  <img src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" alt="LinkedIn" height="20"></span>
- Email: Kevin.Munoz.Poo@gmail.com


 

### Special thanks 🙏
- [Fazt Code](https://www.youtube.com/channel/UCMn28O1sQGochG94HdlthbA) - A YouTube channel with the best courses and excellent videos to learn. Thank you very much Fazt. 😃
