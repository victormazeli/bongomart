const mongoose = require('mongoose');



const PlanFeatureSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please enter a vaild plan name"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =  mongoose.model("PlanFeature", PlanFeatureSchema);

