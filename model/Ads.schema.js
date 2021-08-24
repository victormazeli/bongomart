const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const slugify = require('slugify');


const AdSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter listing title"],
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  description: {
    type: String,
    required: [true, "please enter a description of listing"],
    maxlength: [500, "Description can not be more than 500 characters"],
  },
  images: {
    type: [String]
  },
  tags: {
    type: [String],
    enum: ["New", "Popular", "latest"],
    default: "New"
  },
  slug: {
    type: String,
  },
  price: {
    type: Number,
  },
  // adType: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "AdType",
  //   required: true,
  // },
  condition: {
    type: String,
    enum: ["Used", "Brand New"],
  },
  priceType: {
    type: String,
    enum: ["Fixed", "Price On Call"],
    required: true,
  },
  is_favourite: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  status: {
    type: String,
    required: true,
    enum: ["Active", "Inactive", "Pending"],
    default: "Pending",
  },
  // add store and category relationship
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
}, {timestamps: true});

// Create listing slug from the name

AdSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

AdSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Ad", AdSchema);

