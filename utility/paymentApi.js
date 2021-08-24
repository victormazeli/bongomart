const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(process.env.FLUTTERWAVE_PUBLIC, process.env.FLUTTERWAVE_SECRET_KEY);

/*
### Subscriptions
*/
// exports.fetchSubscription = async () => {

//     try {
        
//         const response = await flw.Subscription.fetch_all()
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };

// exports.cancelSubscription = async () => {

//     try {
//         const payload={
//             "id":"3477" //This is the unique id of the subscription you want to cancel. It is returned in the Get a subscription call as data.id
//         }
        
//         const response = await flw.Subscription.cancel(payload)
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };

// exports.activateSubscription = async () => {

//     try {
//         const payload={
//             "id":"3477" //This is the unique id of the subscription you want to cancel. It is returned in the Get a subscription call as data.id
//         }
        
//         const response = await flw.Subscription.activate(payload)
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };

// /*
// ### Payement Plan
// */
// exports.createPaymentPlan = async () => {

//     try {

//         const payload = {
//             "amount": 500,
//             "name": "the olufemi obafunmiso plan 2", //This is the name of the payment, it will appear on the subscription reminder emails
//             "interval": "monthly", //This will determine the frequency of the charges for this plan. Could be monthly, weekly, etc.
//             "duration": 24 //This is the frequency, it is numeric, e.g. if set to 5 and intervals is set to monthly you would be charged 5 months, and then the subscription stops
            
//         }

//         const response = await flw.PaymentPlan.create(payload)
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };

// exports.fetchAllPlans = async () => {

//     try {

//         const response = await flw.PaymentPlan.get_all()
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };

// exports.fetchPlan = async () => {

//     try {
//         const payload = {
//             "id":"5443" //This is the unique ìdof the payment plan you want to fetch. It is returned in the call to create a payment plan asdata.id`
//         }

//         const response = await flw.PaymentPlan.get_plan(payload)
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };

// exports.updatePlan = async () => {

//     try {
//         const payload = {
//             "id":"5443", //This is the unique ìdof the payment plan you want to fetch. It is returned in the call to create a payment plan asdata.id`
//             "name": "January neighbourhood contribution",
//             "status": "active"
//         }

//         const response = await flw.PaymentPlan.update(payload)
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };

// exports.cancelPlan = async () => {

//     try {
//         const payload = {
//             "id":"5443" //This is the unique ìd` of the payment plan you want to cancel
            
//         }

//         const response = await flw.PaymentPlan.cancel(payload)
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };

/*
### Transactions
*/
// exports.fetch_transactions = async () => {

//     try {


//         const payload = {
//             "from": "2020-01-01",
//             "to": "2020-05-05"
//         }
//         const response = await flw.Transaction.fetch(payload)
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };

// exports.verify = async () => {

//     try {
//         //This is the transaction unique identifier. It is returned in the initiate transaction call as data.id 
//         const payload = {
//             "id": "5708"  
//         }
//         const response = await flw.Transaction.verify(payload)
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };

// exports.View_Transaction_Timeline = async () => {

//     try {
//         const payload = {
//             "id": "1296063" //This is the unique transaction ID. It is returned in the verify transaction call as data.id
//         }
//         const response = await flw.Transaction.event(payload)
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };
/**
 * 
 * Charge Card 
 */
exports.chargeCard = async () => {
    try {
        const response = await flw.Charge.card(payload)
        console.log(response)
        if (response.meta.authorization.mode === 'pin') {
            let payload2 = payload
            payload2.authorization = {
                "mode": "pin",
                "fields": [
                    "pin"
                ],
                "pin": 3310
            }
            const reCallCharge = await flw.Charge.card(payload2)

            const callValidate = await flw.Charge.validate({
                "otp": "12345",
                "flw_ref": reCallCharge.data.flw_ref
            })
            console.log(callValidate)

        }
        if (response.meta.authorization.mode === 'redirect') {

            var url = response.meta.authorization.redirect
            open(url)
        }

        console.log(response)


    } catch (error) {
        console.log(error)
    }
};
/**
 * 
 * Charge by bank
 */
exports.charge_ng_acct = async () => {
    
    try {

        const payload = {
            "tx_ref": "MC-1585dshdhdsdv5050e8", //This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.
            "amount": "100", //This is the amount to be charged.
            "account_bank": "044", //This is the Bank numeric code. You can get a list of supported banks and their respective codes Here: https://developer.flutterwave.com/v3.0/reference#get-all-banks
            "account_number": "0690000037",
            "currency": "NGN",
            "email": "olufemi@flw.com",
            "phone_number": "0902620185", //This is the phone number linked to the customer's mobile money account
            "fullname": "Olufemi Obafunmiso"
        }

        const response = await flw.Charge.ng(payload)
        console.log(response);
    } catch (error) {
        console.log(error)
    }

}