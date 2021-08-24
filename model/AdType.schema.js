const mongoose = require('mongoose')




const AdTypeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter title"],
    trim: true,
    maxlength: [50, "title can not be more than 50 characters"],
  },
  description: {
    type: String,
    required: [true, "please enter a description of Ad type"],
    maxlength: [500, "Description can not be more than 500 characters"],
  },
  price: {
    type: Number,
  },
  formattedDate: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AdType", AdTypeSchema);


// import { prop, getModelForClass} from "@typegoose/typegoose";
// import * as mongoose from "mongoose";


// export class AdType {

//     @prop({ trim:true, required: [true, 'please enter listing title'], maxlength: [50, 'Name can not be more than 50 characters'] })
//     public title?: string;

//     @prop({ required: [true, 'please enter a description of listing'], maxlength: [500, 'Description can not be more than 500 characters'] })
//     public description?: string;

//     @prop()
//     public price?: number;

//     @prop({  default: Date.now() })
//     public createdAt?: Date;

//     @prop()
//     public formattedDate?: string;

// }

// export const AdTypeModel = getModelForClass(AdType);
