const Ads = require('../model/Ads.schema');
const BookmarkAd = require('../model/BookmarkAd.schema');
const Users = require('../model/User.schema');
const Category = require('../model/Category.schema');
const ErrorResponse = require('../utility/errorResponse');
const asyncHandler = require('../middleware/async');
// const crypto = require('crypto');
// const { sendMail } = require('../utility/mail');
const { uploader, cloudinaryConfig  } = require('../middleware/cloudinary');
const { dataUri } = require('../middleware/upload');



exports.index = asyncHandler(async (req, res) => {

    const { title, price, condition, category, page, limit, tags } = req.query;
    const options = {
        page: page,
        limit: limit || 15,
        sort: { createdAt: -1 },
        populate:['category', 'owner', 'state', 'lga']
    };
    
    if (title) {
        const getAllAds = await Ads.paginate({title: new RegExp(title)}, options);

    if (!getAllAds) {
       return new ErrorResponse('No Ads found', 404);
    }
    return  res.status(200).json({success: true, data: getAllAds});
        
    }

    if (price) {
        const getAllAds = await Ads.paginate({price: price}, options);

    if (!getAllAds) {
       return new ErrorResponse('No Ads found', 404);
    }
    return  res.status(200).json({success: true, data: getAllAds});
        
    }

    if (condition) {
        if (condition == 'All') {

            const getAllAds = await Ads.paginate({$or: [ {condition: "Used" }, {condition: "Brand New" }  ] }, options);

            if (!getAllAds) {
               return new ErrorResponse('No Ads found', 404);
            }
            return  res.status(200).json({success: true, data: getAllAds});
            
        }
        const getAllAds = await Ads.paginate({condition: condition}, options);

    if (!getAllAds) {
       return new ErrorResponse('No Ads found', 404);
    }
    return  res.status(200).json({success: true, data: getAllAds});
        
    }

    

    if (category) {
        const getAllAds = await Ads.paginate({category: category }, options);

    if (!getAllAds) {
       return new ErrorResponse('No Ads found', 404);
    }
    return  res.status(200).json({success: true, data: getAllAds});
        
    }

    if (tags) {
        const getAllAds = await Ads.paginate({tags: {$in: [`${tags}`] } }, options);

    if (!getAllAds) {
       return new ErrorResponse('No Ads found', 404);
    }
    return  res.status(200).json({success: true, data: getAllAds});
        
    }

    const getAllAds = await Ads.paginate({}, options);

    if (!getAllAds) {
       return new ErrorResponse('No Ads found', 404);
    }
    return  res.status(200).json({success: true, data: getAllAds});
     

});

exports.getLimitedAds = asyncHandler(async (req, res) => {

    const options = {
        limit: 10,
        sort: { createdAt: -1 }
    };
    const getAllAds = await Ads.paginate({}, options);
    if (!getAllAds) {
        new ErrorResponse('No Ads found', 404);
    }
    
    return  res.status(200).json({success: true, data: getAllAds});

});


exports.create = asyncHandler(async (req, res) => {

    const newAd = await Ads.create(req.body);
    const catId = req.body['category'];

    if (!newAd){
        new ErrorResponse('something went wrong creating ad', 404);
    }

    const updateCategoryAdsCount = await Category.findByIdAndUpdate(catId, {numberOfAds: +1}, {new: true});


    return res.status(201).json({success: true, data: newAd});

});

exports.createCategory = asyncHandler(async (req, res) => {

    const newCategory = await Category.create(req.body);

    if (!newCategory){
        new ErrorResponse('something went wrong creating category', 404);
    }


    return res.status(201).json({success: true, data: newCategory});

});

exports.getCategories = asyncHandler(async (req, res) => {

    const categories = await Category.find({});

    if (!categories){
        new ErrorResponse('something went wrong getting categories', 404);
    }


    return res.status(201).json({success: true, data: categories});

});

exports.show = asyncHandler(async (req, res) => {
    const { id } = req.params

    const getAd = await Ads.findById(id).populate(['category', 'owner', 'lga', 'state']);

    if (!getAd){
        new ErrorResponse('No Ad Found', 404);
    }
     
    return res.status(200).json({success: true, data: getAd});

});

exports.userAds = asyncHandler(async (req, res) => {
    const { userId } = req.query;

    const options = {
        select: 'title, category, condition',
        sort: {createdAt: -1 },
        populate: 'category',
        offset: 20,
        limit: 10
    };

    const getAd = await Ads.paginate({owner: userId }, options)

    if (!getAd){
        new ErrorResponse('No Ad Found', 404);
    }
    
    return res.status(200).json({success: true, data: getAd});

});


exports.edit = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const findAd = await Ads.findByIdAndUpdate(id, req.body, {upsert: true})

    if (!findAd){
        new ErrorResponse('something went wrong updating ad', 404);
    }

    const updatedData = { ...findAd._doc, ...req.body  }

    return res.status(200).json({success: true, data: updatedData});


});

exports.destroy = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const deleteAd = await Ads.findByIdAndDelete(id);

    return res.status(204).json({success: true, data: deleteAd});

});

exports.uploadImage = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (req.file) {
        const file = await dataUri(req);
        const result = await uploader.upload(file.content, {folder: "ads", width: 600, height: 400, crop: "fill"});
        // console.log(result);
        // console.log(result.url);
        const imageUrl = result.url;

        console.log(imageUrl);

        const AdImageUpload = await Ads.findOneAndUpdate({_id: id }, { $push: { images: imageUrl  }  });

        if (!AdImageUpload) {
            return new ErrorResponse('sorry, Unable to upload image', 404)
        }

    return res.status(201).json({success: true, data: AdImageUpload._doc});
    }

    return new ErrorResponse('something went wrong processing your request', 404);


});

exports.bookmarkAd = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    const findAd = await Ads.findById(id);
    const findUser = await Users.findById(userId)
    const saveAd = await BookmarkAd.create({ad: findAd, owner: findUser });

    if (!saveAd) {
        return new ErrorResponse('something went wrong bookmarking Ad', 404);
    }

    return res.status(201).json({success: true, data: saveAd});

});

exports.getBookmarkAds = asyncHandler(async (req, res) => {
 const { userId } = req.query;

    const options = {
        select: 'title, category, condition',
        sort: {createdAt: -1 },
        populate: 'category',
        offset: 20,
        limit: 10
    };
   
    const getAd = await BookmarkAd.paginate({owner: userId }, options);

    if (!getAd) {
        return new ErrorResponse('No bookmarked Ads found', 404);
    }

    return res.status(200).json({success: true, data: getAd});

});

exports.favouriteAd = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    const findUser = await Users.findById(userId);
    const saveAd = await Ads.findByIdAndUpdate(id, {is_favourite: findUser }, {upsert: true });

    if (!saveAd) {
        return new ErrorResponse('can not favourite Ad', 404);
    }

    return res.status(201).json({success: true, data: saveAd});

});

exports.getFavouriteAds = asyncHandler(async (req, res) => {
    const { userId } = req.query;

    const options = {
        select: 'title, category, condition',
        sort: {createdAt: -1 },
        populate: 'category',
        offset: 20,
        limit: 10
    };

    const favouriteAds = await Ads.paginate({is_favourite: userId}, options);

    if (!favouriteAds) {
        return new ErrorResponse('No Favourite Ads found', 404);
    }

    return res.status(200).json({success: true, data: favouriteAds });

});


exports.suspendAd = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { inactive }  = req.body;
    const saveAd = await Ads.findByIdAndUpdate(id, {status: inactive }, {upsert: true });

    if (!saveAd) {
        return new ErrorResponse('can not favourite Ad', 404);
    }

    return res.status(201).json({success: true, data: saveAd});

});




exports.unSuspendAd = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { active }  = req.body;
    const saveAd = await Ads.findByIdAndUpdate(id, {status: active }, {upsert: true });

    if (!saveAd) {
        return new ErrorResponse('can not activate Ad', 404);
    }

    return res.status(201).json({success: true, data: saveAd});

});