const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const SubscriptionSchema = new mongoose.Schema({
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  expiryDate: Date
});

SubscriptionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Subscription", SubscriptionSchema);

