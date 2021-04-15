var express = require('express');
var router = express.Router();
const controller = require('../controllers/main.controller');
var allowDelete = function(req, res, next){
  res.append('Access-Control-Allow-Methods', 'DELETE')
  next()
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    data:{
      message: "This is a health check"
    }
  })
  //res.render('index', { title: 'health check.' });
});

router.get('/form',function(req,res){
  res.render('uploadForm', { title: 'Health Check'});
});

//users
router.get('/users', controller.getUsers);
router.get('/users/:userId/bookings', controller.getUserBookings);
router.get('/users/:userId/listings', controller.getUserListings);
router.get('/users/:userId/listings/:listingId/bookings', controller.getUserListingBookings);
router.post('/login',controller.loginUser);
router.get('/users/:userId',controller.getUser);
router.post('/users',controller.postUser);
router.delete('/users/:userId',controller.deleteUser);
router.put('/users/:userId',controller.putUser);
//bookings
router.get('/bookings', controller.getBookings);
router.get('/bookings/:bookingId',controller.getBooking);
router.post('/bookings',controller.postBooking);
router.delete('/bookings/:bookingId',controller.deleteBooking);
router.put('/bookings/:bookingId',controller.putBooking);
//reviews
router.get('/listings/:listingId/reviews', controller.getReviews);
router.get('/listings/:listingId/reviews/:reviewId',controller.getReview);
router.post('/listings/:listingId/reviews',controller.postReview);
router.delete('/listings/:listingId/reviews/:reviewId',controller.deleteReview);
//listings
router.get('/listings', controller.getListings);
router.get('/listings/:listingId',controller.getListing);
router.get('/listings/:listingId/bookings',controller.getListingBookings);
router.post('/listings',controller.postListing);
router.delete('/listings/:listingId', controller.deleteListing);
router.put('/listings/:listingId',controller.putListing);
//amenities
/* router.get('/amenities', controller.getAmenities);
router.get('/amenities/:amenityId',controller.getAmenity);
router.post('/amenities',controller.postTestAmenity);
router.delete('/amenities/:amenityId',controller.deleteAmenity);
router.put('/amenities/:amenityId',controller.putAmenity); */
//listing amenities
/* router.get('/listings/:listingId/amenities', controller.getLAmenities);
router.get('/listings/:listingId/amenities/:lAmenityId',controller.getLAmenity);
router.post('/listings/:listingId/amenities',controller.postLAmenity);
router.delete('/listings/:listingId/amenities/:lAmenityId',controller.deleteLAmenity); */
//listing images
router.get('/listings/:listingId/images',controller.getLImages);
router.get('/listings/:listingId/images/:lImageId',controller.getLImage);
router.post('/listings/:listingId/images'/* , upload.array("listingImages",4) */,controller.postLImage);
router.delete('/listings/:listingId/images/:lImageId', controller.deleteLImage);


module.exports = router;

