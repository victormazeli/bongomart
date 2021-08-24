const mongoose = require('mongoose');
const {development, test, production} = require('../config')
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;