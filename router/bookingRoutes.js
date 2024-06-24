const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const authenticate = require("../middleware/authenticate");



router.get('/bookings', authenticate, bookingController.getBookings);
router.get('/bookingsAdmin', authenticate, bookingController.getBookingAdmin);
router.get('/events',  bookingController.getEvents);
router.get('/bookingsView/:bookingId',authenticate, bookingController.getBookingById);
router.get('/BookingsUser',authenticate,  bookingController.getBookingByUserId);
router.post('/bookings',authenticate, bookingController.createBooking);
router.put('/bookingsEdit/:bookingId',authenticate, bookingController.updateBooking);
router.delete('/bookings/:bookingId',authenticate, bookingController.deleteBooking);

module.exports = router;
