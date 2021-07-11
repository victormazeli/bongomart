const mongoose = require('mongoose');
const {mongoUri} = require('../config')
const connectDB = async () => {
    const conn = await mongoose.connect(mongoUri, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useCreateIndex: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;