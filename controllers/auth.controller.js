const User = require('../model/User.schema');
const ErrorResponse = require('../utility/errorResponse');
const asyncHandler = require('../middleware/async');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { sendMail } = require('../utility/mail');
const { firebase } = require('../config/firebaseAdmin');
const jwt = require('jsonwebtoken');

exports.loginController = asyncHandler(async (req, res, next) => {

    const { authToken } = req.body;

    const { email, email_verified, picture, phone_number, uid } = await firebase.auth().verifyIdToken(authToken);


    const user = await User.findOne({ uid });

    // console.log(user);

    if (!user) {
        return next(
            new ErrorResponse('User not valid', 404)
        );
    }

    // const isMatch = await bcrypt.compare(password, user.password);

    // // console.log(isMatch);

    // if(!isMatch) {
    //     return next(
    //         new ErrorResponse('Invalid password', 404)
    //     );
    // }

    sendTokenResponse(user, 200, res);
        
    


});

exports.registerController = asyncHandler(async (req, res, next) => {
    const { authToken } = req.body;

    console.log(authToken);

    const { email, email_verified, picture, phone_number, uid } = await firebase.auth().verifyIdToken(authToken);

    const checkUser = await User.findOne({ uid });

    if (checkUser) {
        return next(
            new ErrorResponse('This user already exist')
        );
    }


    const user = await User.create({email, email_verified, picture, phone_number, uid });

    if(!user){
        return new ErrorResponse('Could not create this user');

    }

    console.log(user);

   sendTokenResponse(user, 200, res);
    
});

exports.meController = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

   return res.status(200).json({
        success: true,
        data: user
    })
});

exports.forgotPasswordController = asyncHandler(async (req, res, next) => {

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return next(
                new ErrorResponse('Theres is no user with associated with this email', 404)
            );
        }

        const resetToken = crypto.randomBytes(20).toString('hex');

        const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

        // console.log(resetPasswordToken);

        user.resetPasswordToken = resetPasswordToken; 
        user.resetPassordExpire = Date.now() + 10 * 60 * 1000; 
         
        await user.save({ validateBeforeSave: false});

        const resetUrl =`${req.protocol}://${req.get('host')}/api/auth/resetpassword/${resetToken}`;

        const message = `You are receiving this email because you (or someone else) has requested the reset of password. click: \n\n ${resetUrl} to reset `;
        const data = {
	        from: "noreply@bongomart.com.ng",
	        to: `${user.email}`,
	        subject: 'Password Reset',
	        text: message 
        };

        try {
            sendMail(data);

            return res.status(200).json({success: true, data: 'Email sent'});

        } catch (error) {
        console.log(error);
        user.resetPasswordToken = undefined; 
        user.resetPassordExpire = undefined; 
         
        await user.save({ validateBeforeSave: false});

        return next(
            new ErrorResponse('Email could not be sent', 404)
        ); 

            
        }   
   

});

exports.resetPasswordController = asyncHandler(async (req, res, next) => {
    const resetPasswordToken = 
    crypto
    .createHash('sha256')
    .update(req.params.resettoken)
    .digest('hex');

    console.log(resetPasswordToken);


        const user = await User.findOne({ 
            resetPasswordToken, 
            resetPassordExpire: { $gt: Date.now() }
        });
        
        if (!user) {
            return next(
                new ErrorResponse('Invalid Token', 404)
            );
        }
    
    
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPassordExpire = undefined;
    
        await user.save();
    
        sendTokenResponse(user, 200, res);
        

    
});
const sendTokenResponse = (user, statusCode, res) => {
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });

    const options = {
        expires:  new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') {

        options.secure = true;
        
    }

    return res.status(statusCode).cookie('token', token, options).json({success: true, token });
    
}