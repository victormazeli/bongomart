const path = require('path');
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const ads = require('./routes/ads');
const auth = require('./routes/auth');
const payment = require('./routes/payment');
const cms = require('./routes/cms');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const { cloudinaryConfig  } = require('./middleware/cloudinary');
// const passport = require('passport');
// const { facebookLogin, googleLogin } = require('./config/passport')

const connectDB = require("./database/db");

//load env variables
dotenv.config({path: __dirname + '/.env' });

//connect to database
connectDB();

const app = express();
// app.use(passport.initialize());
// app.use(passport.session());

// facebookLogin(passport);
// googleLogin(passport);

// set helmet
app.use(helmet());

app.use(cors());

app.use(cookieParser());

//Body parser
app.use(express.json());

// error handler
app.use(errorHandler);



//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use('*', cloudinaryConfig);
app.use('/api/ads', ads);
app.use('/api/auth', auth);
app.use('/api/payment', payment);
app.use('/api/cms', cms);


module.exports = app;