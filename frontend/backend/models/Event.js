import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const eventSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  dateTime: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String },
  shareId: { type: String, default: () => uuidv4() },
  createdAt: { type: Date, default: Date.now }
});

export const Event = mongoose.model('Event', eventSchema);
