// import { prop, Ref, getModelForClass } from '@typegoose/typegoose';
// import * as mongoose from 'mongoose'
// import { User } from './User.schema';


// export class Review {

//     @prop({ trim:true, required: [true, 'please enter Review title'], maxlength: [50, 'Name can not be more than 50 characters'] })
//     public title?: string;

//     @prop({ required: [true, 'please enter a description of review'], maxlength: [500, 'Description can not be more than 500 characters'] })
//     public description?: string;

//     @prop({max: [5, 'Rating can not be more than 5'], min: [1, 'Rating must be at least 1']  })
//     public rating?: number;

//     @prop({ ref: () => Store })
//     public store: Ref<Store>;

//     @prop({ ref: () => User })
//     public user: Ref<User>;
// }






// // const mongoose = require('mongoose');

// // const ReviewSchema = new mongoose.Schema({
// //     title: {
// //         type: String,
// //         required: [true, 'please enter review title'],
// //         trim: true,
// //         maxlength: [50, 'Name can not be more than 50 characters']
// //     },
// //     description: {
// //         type:  String,
// //         required: [true, 'please enter a description of review'],
// //         maxlength: [500, 'Description can not be more than 500 characters']

// //     },
// //     rating: {
// //         type: Number,
// //         required: true,
// //         min: [1, 'Rating must be at least 1'],
// //         max: [5, 'Rating can not be more than 5']
// //     },
// //     seller: {
// //         type: mongoose.Schema.ObjectId,
// //         ref: 'User',
// //         required: true

// //     },
// //     user: {
// //         type: mongoose.Schema.ObjectId,
// //         ref: 'User',
// //         required: true

// //     },
// //     createdAt: {
// //         type: Date,
// //         default: Date.now
// //     }
// // });

// // module.exports = mongoose.model('Review', ReviewSchema);