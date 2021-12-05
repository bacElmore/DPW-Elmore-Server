const express = require('express');
//Set View Engine for EJS
const app = express();

const mysql = require('mysql');
var path = require('path');
require('dotenv/config');
const readline = require('readline');
const Joi = require('joi');
const ejs = require('ejs');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const request = require('request');
//FOR SENDING EMAIL
const nodeMailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');


//Root page
app.get('/', (req,res) => {
    res.json('Test Elmore Server.');
});

const serverPort = process.env.PORT;
app.listen(serverPort, () => console.log(`Listening on Port ${serverPort}`));