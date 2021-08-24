const path = require('path');
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const ads = require('./routes/ads');
const auth = require('./routes/auth');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const { cloudinaryConfig  } = require('./middleware/cloudinary')

const connectDB = require("./database/db");

//load env variables
dotenv.config({path: __dirname + '/.env' });

//connect to database
connectDB();

const app = express();


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

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
        
    });
    
}

const server = app.listen(port, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`);
});

// Handle unhandle promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});



