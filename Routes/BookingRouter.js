import express from 'express';
import { createBooking } from '../Controller/BookingController.js';

const bookingRouter = express.Router();

bookingRouter.post('/', createBooking);

export default bookingRouter;