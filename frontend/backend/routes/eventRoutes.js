import express from 'express';
import { auth } from '../middleware/authMiddleware.js';
import { createEvent, getEvents, getUpcomingEvents, getPastEvents, getEventByShareId } from '../controllers/eventController.js';

const router = express.Router();

router.post('/', auth, createEvent);
router.get('/', auth, getEvents);
router.get('/upcoming', auth, getUpcomingEvents);
router.get('/past', auth, getPastEvents);
router.get('/share/:shareId', getEventByShareId);

export default router;
