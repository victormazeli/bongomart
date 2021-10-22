const Subscription = require('../model/Subscription.schema');
const ErrorResponse = require('../utility/errorResponse');
const asyncHandler = require('../middleware/async');


exports.index = asyncHandler(async (req, res) => {
   
    const options = {
        sort: {createdAt: -1 },
        populate: ['plan', 'user'],
        offset: 20,
        limit: 10
    };

    const getAllSubscriptions = await Subscription.paginate({}, options);

    if (!getAllSubscriptions) {
        return new ErrorResponse('No Subscriptions found', 404);
    }

    return res.status(200).json({success: true, data: getAllSubscriptions });




});


exports.create = asyncHandler(async (req, res) => {
    const subscribeUser = await Subscription.create(req.body);
    
    if (!subscribeUser) {
        return new ErrorResponse('something went wrong subscribing user', 404);

    }

    return res.status(201).json({success: true, data: subscribeUser });



});

exports.show = asyncHandler(async (req, res) => {
    const { Id } = req.params;

    const getAllSubscription = await Subscription.findById(Id);

    if (!getAllSubscription) {
        return new ErrorResponse('can not find subscription', 404);
    }

    return res.status(200).json({success: true, data: getAllSubscription });


});

// exports.edit = asyncHandler(async (req, res) => {

// });

exports.destroy = asyncHandler(async (req, res) => {

});