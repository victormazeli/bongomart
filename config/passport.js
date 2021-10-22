const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../model/User.schema');
const jwt = require('jsonwebtoken');


module.exports = {
    googleLogin: (passport) => {
        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_APP_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
          },
          async (accessToken, refreshToken, profile, cb) => {
            let user_email = profile.emails[0].value;
            const findUser = await User.findOne({email: user_email});
            if (!findUser) {
                const createUser = await User.create({
                    email: user_email, 
                    picture: profile.photos[0].value, 
                    name: profile.name, 
                    username: profile.displayName,
                    provider: profile.provider
                });
                if (!createUser) {
                    return cb(null, false);
                }
                const token = jwt.sign({id: createUser.id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRE
                });
                const redirectUrl = `http://localhost:8000/${token}`
                return cb(null, redirectUrl);
            }
            const token = jwt.sign({id: findUser.id}, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRE
            });
            const redirectUrl = `http://localhost:8000/${token}`
            return cb(null, redirectUrl);
        }));
    },
    facebookLogin: (passport) => {
        passport.use(new FacebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
            callbackURL: process.env.FACEBOOK_CALLBACK_URL
          },
          async (accessToken, refreshToken, profile, cb) => {
            let user_email = profile.emails[0].value;
            const findUser = await User.findOne({email: user_email});
            if (!findUser) {
                const createUser = await User.create({
                    email: user_email, 
                    picture: profile.photos[0].value, 
                    name: profile.name, 
                    username: profile.displayName,
                    provider: profile.provider
                });
                if (!createUser) {
                    return cb(null, false);
                }
                const token = jwt.sign({id: createUser.id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRE
                });
                const redirectUrl = `http://localhost:8000/${token}`
                return cb(null, redirectUrl);
            }
            const token = jwt.sign({id: findUser.id}, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRE
            });
            const redirectUrl = `http://localhost:8000/${token}`
                return cb(null, redirectUrl);
            // return cb(null, profile);
        }));


    },
}