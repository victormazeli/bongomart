const express = require("express");
const router = express.Router();
const { protect } = require('../middleware/auth');
const { 
    loginController, 
    registerController, 
    resetPasswordController, 
    forgotPasswordController, 
    meController 
} = require('../controllers/auth.controller');
const passport = require('passport');





router.post('/register', registerController);

router.post('/login', loginController);

router.get('/me', protect, meController);

router.post('/forgotPassword', forgotPasswordController);

router.put('/resetpassword/:resettoken', resetPasswordController);

// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
// router.get('/google/redirect', passport.authenticate('google', { session: false, failureRedirect: `https://localhost:3000/login` }), (req, res) => {
//   res.redirect(req.user); //req.user has the redirection_url
// });

// router.get('/facebook', passport.authenticate('facebook', { scope: ['profile', 'email'], session: false }));
// router.get('/facebook/redirect', passport.authenticate('facebook', { session: false, failureRedirect: `https://localhost:3000/login` }), (req, res) => {
//   res.redirect(req.user); //req.user has the redirection_url
// });


// router.post('/register', async(req, res) => {
//     const { email, password, name } = req.body;

//     try {

//         const user = User.create({email, password, name });
    
//     if (!user) throw new Error('could not create user');

//    sendTokenResponse(user, 200, res);
        
//     } catch (error) {
//         console.log(error);
//         return null;
        
//     }

// });

// router.post('/login', async(req, res) => {

//     const { email, password} = req.body;

//     if ( !email || !password ) {
//         throw new Error('Please provide provide an email and password');
        
//     }

//     try {

//     const user = await User.findOne({ email }).select('+password');

//     // console.log(user);

//     if (!user) throw new Error('Invalid credentials');

//     const isMatch = await bcrypt.compare(password, user.password);

//     // console.log(isMatch);

//     if(!isMatch) throw new Error('Invalid password');

//     sendTokenResponse(user, 200, res);
        
//     } catch (error) {
//         console.log(error);

//         return null;
        
//     }

// });

// router.get('/me', protect, async(req, res) => {
//     const user = await User.findById(req.user.id);

//    return res.status(200).json({
//         success: true,
//         data: user
//     })
// });

// router.post('/forgotpassword', async(req, res) => {

//     try {

//         const user = await User.findOne({ email: req.body.email });

//         if (!user) {
//             throw new Error('Theres is no user with associated with this email')
//         }

//         const resetToken = crypto.randomBytes(20).toString('hex');

//         const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

//         // console.log(resetPasswordToken);

//         user.resetPasswordToken = resetPasswordToken; 
//         user.resetPassordExpire = Date.now() + 10 * 60 * 1000; 
         
//         await user.save({ validateBeforeSave: false});

//         const resetUrl =`${req.protocol}://${req.get('host')}/api/auth/resetpassword/${resetToken}`;

//         const message = `You are receiving this email because you (or someone else) has requested the reset of password. click: \n\n ${resetUrl} to reset `;
//         const data = {
// 	        from: "noreply@bongomart.com.ng",
// 	        to: `${user.email}`,
// 	        subject: 'Password Reset',
// 	        text: message 
//         };

//         sendMail(data);

//         return res.status(200).json({success: true, data: 'Email sent'});
        
//     } catch (error) {
//         console.log(error);
//         user.resetPasswordToken = undefined; 
//         user.resetPassordExpire = undefined; 
         
//         await user.save({ validateBeforeSave: false});

//         return new Error('Email could not be sent'); 

        
//     }
   


  
// });

// router.put('/resetpassword/:resettoken', async  (req, res) => {

//     console.log(req.params.resettoken);

//     const resetPasswordToken = 
//     crypto
//     .createHash('sha256')
//     .update(req.params.resettoken)
//     .digest('hex');

//     console.log(resetPasswordToken);

//     try {

//         const user = await User.findOne({ 
//             resetPasswordToken, 
//             resetPassordExpire: { $gt: Date.now() }
//         });
        
//         if (!user) throw new Error('Invalid Token');
    
    
//         user.password = req.body.password;
//         user.resetPasswordToken = undefined;
//         user.resetPassordExpire = undefined;
    
//         await user.save();
    
//         sendTokenResponse(user, 200, res);
        
//     } catch (error) {

//         console.log(error);
        
//     }

    

    
// });

// const sendTokenResponse = (user, statusCode, res) => {
//     const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRE
//     });

//     const options = {
//         expires:  new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
//         httpOnly: true
//     };

//     if (process.env.NODE_ENV === 'production') {

//         options.secure = true;
        
//     }

//     return res.status(statusCode).cookie('token', token, options).json({success: true, token });
    
// }

module.exports = router;