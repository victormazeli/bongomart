const Location = require('../model/State.schema');
const Lga = require('../model/LGA.schma');
const ErrorResponse = require('../utility/errorResponse');
const asyncHandler = require('../middleware/async');
const { ObjectID } = require('mongodb');



exports.index = asyncHandler(async (req, res) => {
    const getLocations = await Location.find({});

    if (!getLocations) {
        new ErrorResponse('No locations found', 400);
    }

     res.status(200).json({success: true, data: getLocations});
   




});


exports.create = asyncHandler(async (req, res) => {
    const newState = await Location.create(res.body);
    if (!newState) {
        new ErrorResponse('could not create state', 400);
    }

     res.status(201).json({success: true, data: newState});
  



});

exports.show = asyncHandler(async (req, res) => {
  


});

// exports.edit = asyncHandler(async (req, res) => {

// });

exports.destroy = asyncHandler(async (req, res) => {

});

exports.populateStateLga = asyncHandler(async (req, res) => {
    const { stateId } = req.body;

    const lgas = await Lga.find({stateId: stateId});
    
    if(!lgas){
        return new ErrorResponse('something went wrong getting lgas for this Id', 404);

    }
    const lgaId = lgas.map((doc) => {
        return new ObjectID(doc._id);
    })
    

    console.log(lgaId);

    const updateState = await Location.findOneAndUpdate({locationId: stateId}, {$push: {lgas: {$each: [...lgaId] }}}, { new: true});

     res.status(201).json({success: true, data: updateState});

});