const Users = require('../model/User.schema');
const ErrorResponse = require('../utility/errorResponse');
const asyncHandler = require('../middleware/async');
// const crypto = require('crypto');
// const { sendMail } = require('../utility/mail');


exports.index = asyncHandler(async (req, res) => {
    const getAllUsers = await Users.paginate();
    if (!getAllUsers) {
        new ErrorResponse('No Users found', 404);
    }
    
    return  res.status(200).json({success: true, data: getAllUsers});

});


exports.create = asyncHandler(async (req, res) => {
    const newUser = await Users.create(req.body);

    if (!newUser){
        new ErrorResponse('something went wrong creating ad', 404);
    }

    return res.status(201).json({success: true, data: newUser});

});

exports.show = asyncHandler(async (req, res) => {
    const { id } = req.params

    const getUser = await User.findById(id);

    if (!getAd){
        new ErrorResponse('No Ad Found', 404);
    }
    
    return res.status(200).json({success: true, data: getUser});

});

exports.edit = asyncHandler(async (req, res) => {
    const { id } = req.body;

    const findUser = await Users.findByIdAndUpdate(id, req.body, {upsert: true})

    if (!findUser){
        new ErrorResponse('something went wrong updating ad', 404);
    }

    const updatedData = { ...findUser._doc, ...req.body  }

    return res.status(200).json({success: true, data: updatedData});


});

exports.destroy = asyncHandler(async (req, res) => {
    const { id } = req.body;

    const deleteUser = await Users.findByIdAndDelete(id);

    return res.status(204).json({success: true, data: deleteUser});

});


exports.disableAccount = asyncHandler(async (req, res) => {
    const { id } = req.body;

    const disableAccount = await Users.findByIdAndUpdate(id, {is_disabled: true});

    return res.status(204).json({success: true, data: disableAccount.is_disabled});

});

exports.makeVip = asyncHandler(async (req, res) => {
    const { id } = req.body;

    const upgradeAccount = await Users.findByIdAndUpdate(id, {vip: true});

    return res.status(204).json({success: true, data: upgradeAccount.vip});

});

exports.makePremium = asyncHandler(async (req, res) => {
    const { id } = req.body;

    const upgradeAccount = await Users.findByIdAndUpdate(id, {premium: true});

    return res.status(204).json({success: true, data: upgradeAccount.premium});

});