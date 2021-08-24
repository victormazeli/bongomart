const mongoose = require('mongoose');



const PlanSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please enter a vaild plan name"],
  },
  planInterval: {
    type: String,
    enum: ["Monthly", "Daily", "Yearly"],
    required: true,
    default: "Monthly"
  },
  amount: {
    type: Number,
    required: [true, "Please enter a vaild amount"],
  },
  features: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "PlanFeature",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =  mongoose.model("Plan", PlanSchema);

