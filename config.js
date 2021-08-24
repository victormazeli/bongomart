require('dotenv/config');

module.exports = {
    mongoUri: process.env.MONGO_URI,
    development: {
        mongoUrl: process.env.DEV_MONGO_URL,
        database: process.env.DEV_DATABASE_NAME
    },
    test: {
        mongoUrl: process.env.TEST_MONGO_URL,
       
    },
    production: {
        mongoUrl: process.env.MONGO_URI,
        
    },
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRE,
}