const mongoose = require('mongoose');



const LocationSchema = new mongoose.Schema({
  name: {
    type: String,

  },

  locationId: {
    type: Number
  },

  lgas: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "StateLgas",
  },

});

module.exports =  mongoose.model("Location", LocationSchema);

