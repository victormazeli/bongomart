const ErrorResponse = require('../utility/errorResponse');
const asyncHandler = require('../middleware/async');
const Users = require('../model/User.schema');
const Subscription = require('../model/Subscription.schema');
const request = require('request');



exports.index = asyncHandler(async (req, res) => {

});

exports.makePayment = asyncHandler(async (req, res) => {
    // console.log(req.body);
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            url: `https://api.flutterwave.com/v3/payments`,
            json: true,
            body: req.body,
            headers: {
                Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,

            },
        };
        request(options, function(err, response) {
            if(process.env.NODE_ENV !== 'Production'){
                console.log(err);

            }
            // console.log(response.body);
            resolve(res.json(response.body));




        });
    });

});

exports.show = asyncHandler(async (req, res) => {

});

exports.webHookCallBack = asyncHandler(async (req, res, next) => {
    // retrieve the signature from the header
  const hash = req.headers["verif-hash"];
  
  if(!hash) {
    // discard the request, only a post with the right Flutterwave signature header gets our attention 
    return next(
        new ErrorResponse('invalid hash', 400)
    );
  }
  
  // Get signature stored as env variable on your server
  const secret_hash = process.env.MY_HASH;
  
  // check if signatures match
  
  if(hash !== secret_hash) {
   // silently exit, or check that you are passing the right hash on your server.
   process.exit(1);

  }
  
  // Retrieve the request's body
  const request_json = JSON.parse(req.body);
  //subscribe user
  const trxId = request_json.data.id;
  const trx = await verifyTransaction(trxId);
if (trx.status !== "success") {
  return next(
    new ErrorResponse('Transaction not successful', 400)
  )

}
const getUser = await Users.findOne({email: request_json.data.customer.email});
if (!getUser) {
    return next( 
        new ErrorResponse('user with this email not found', 400)
    );
}

const createUserSubscription = await Subscription.create({
    plan: trx.data.meta.plan_id,
    user: getUser._id,
})

if (!createUserSubscription) {
    return next(
        new ErrorResponse('Could not create subscription for this user', 400)
    );
}
const dateCreated = createUserSubscription['createdAt'];
const expiryDate = new Date(dateCreated + 30 * 24 * 60 * 60 * 1000)
const updateSubscriptionDate = await Subscription.findByIdAndUpdate(createUserSubscription.id, {expiryDate: expiryDate}, {new: true})
const updateUserStatus = await Users.findByIdAndUpdate(getUser.id, {subscribed: true, subscriptionDate: dateCreated }, {new: true});
if (!updateUserStatus) {
    return next(
        new ErrorResponse('unable to update user status', 400)
    );
}

  res.send(200);


});

exports.getAllTransactions = asyncHandler(async (req, res) => {
    

});


function verifyTransaction(trxId){
    return new Promise((resolve, reject) => {
        const options = {
            'method': 'GET',
            'url': `https://api.flutterwave.com/v3/transactions/${trxId}/verify`,
            'headers': {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
            }
          };
          request(options, function (error, response) { 
            if (process.env.NODE_ENV !== 'Production') {
                console.log(error);


            };
            // console.log(response.body);
            resolve(response.body);
          });
    });
}