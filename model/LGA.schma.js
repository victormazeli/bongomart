const mongoose = require('mongoose');



const StateLgaSchema = new mongoose.Schema({
  lga: String,

  stateId: Number,

});

module.exports =  mongoose.model("StateLgas", StateLgaSchema);

