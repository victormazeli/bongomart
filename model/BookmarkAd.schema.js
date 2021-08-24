const mongoose = require('mongoose');


const BookmarkAdSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ad",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BookmarkAd", BookmarkAdSchema);


// import { prop, Ref, getModelForClass} from "@typegoose/typegoose";
// import { Ad } from "./Ads.schema";
// import { User } from "./User.schema";


// export class FavouriteAd {
//     @prop({ ref: () => User  })
//     public user?: Ref<User>;

//     @prop({ ref: () => Ad  })
//     public listing?: Ref<Ad>;

//     @prop({ default: Date.now })
//     public createdAt?: Date;

// }

// export const FavouriteAdModel = getModelForClass(FavouriteAd);

