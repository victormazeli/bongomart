const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const mongoosePaginate = require('mongoose-paginate-v2');
 
const UserSchema = new mongoose.Schema({

    firstname: {
        type: String,
        // required: [true, 'Please enter your name'],
        maxlength: 30

    },
    lastname: {
        type: String,
        // required: [true, 'Please enter your name'],
        maxlength: 30

    },

    username: {
        type: String,
        // required: [true, 'Please enter your name'],
        maxlength: 20

    },

    uid: {
        type: String,
    },

    email_verified: {
        type: Boolean
    },

    phone_number: {
        type: String
    },

    picture: {
        type: String
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
    suspended: {
        type: Boolean,
        default: false
    },
    subscribed: {
        type: Boolean,
        default: false
    },
    // password:{
    //     type: String,
    //     required: [true, 'Please enter a password'],
    //     minlength: 6,
    //     select: false
    // },
    // resetPasswordToken: String,
    // resetPassordExpire: Date,
    subscriptionDate: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }

});

// UserSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) {
//         next();
        
//     }
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;

// });


// UserSchema.methods.isValidPassword = async function(password){
//     const compare = await bcrypt.compare(password, this.password);

//     return compare;
// };

// UserSchema.methods.getSignedJwtToken = function () {
//     return 
// }

UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', UserSchema);

