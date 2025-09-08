import { Event } from '../models/Event.js';

export const createEvent = async (req, res) => {
  const { title, dateTime, location, description } = req.body;
  try {
    const event = new Event({ userId: req.user.id, title, dateTime, location, description });
    await event.save();
    res.status(201).json(event);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find({ userId: req.user.id }).sort({ dateTime: 1 });
    res.json(events);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUpcomingEvents = async (req, res) => {
  try {
    const now = new Date();
    const events = await Event.find({ userId: req.user.id, dateTime: { $gte: now } }).sort({ dateTime: 1 });
    res.json(events);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPastEvents = async (req, res) => {
  try {
    const now = new Date();
    const events = await Event.find({ userId: req.user.id, dateTime: { $lt: now } }).sort({ dateTime: -1 });
    res.json(events);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEventByShareId = async (req, res) => {
  try {
    const event = await Event.findOne({ shareId: req.params.shareId });
    if(!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
};
