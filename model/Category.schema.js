const mongoose = require('mongoose');


const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please enter a vaild title']
    },
    numberOfAds: {
        type: Number,
        default: 0,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Category', CategorySchema);

// import { prop, getModelForClass, pre, DocumentType } from '@typegoose/typegoose';
// import * as mongoose from 'mongoose'


// export class Category {
//     @prop({ required: [true, 'Please enter a vaild title'], trim: true  })
//     public title?: string;

//     @prop({ default: Date.now })
//     public createdAt?: Date;

// }

// export const CategoryModel = getModelForClass(Category);