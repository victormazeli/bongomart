const express = require("express");
const router = express.Router();
const { protect } = require('../middleware/auth');
const { multerUploads } = require('../middleware/upload');
const {
    index, 
    create,
    userAds,
    favouriteAd,
    getFavouriteAds,
    getBookmarkAds,
    getLimitedAds,
    bookmarkAd,
    edit, 
    destroy,
    show,
    suspendAd,
    uploadImage,
    unSuspendAd,
    createCategory,
    getCategories
} = require('../controllers/ads.controller')

router.route('/')
.get(index)
.post(create);

router.get('/homeAds', getLimitedAds);

router.route('/category').get(getCategories).post(createCategory);

router.get('/detailAd/:id',  show);

router.put('/editAd/:id', edit);

router.put('/upload/:id', multerUploads, uploadImage);

router.delete('/deleteAd/:id', protect, destroy);

router.get('/myAds', protect, userAds);

router.route('/bookmarkedAd/:id')
.get(protect, getBookmarkAds )
.post(protect,  bookmarkAd);

router.route('/favouriteAd/:id')
.get(protect, getFavouriteAds)
.put(protect, favouriteAd);



module.exports = router;