const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

 
const AdminSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxlength: 30

    },

    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid mail'
        ]
    },
   
    password:{
        type: String,
        required: [true, 'Please enter a password'],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPassordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }

});

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
        
    }
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

});


// UserSchema.methods.isValidPassword = async function(password){
//     const compare = await bcrypt.compare(password, this.password);

//     return compare;
// };

// UserSchema.methods.getSignedJwtToken = function () {
//     return 
// }

module.exports = mongoose.model('Admin', AdminSchema);

