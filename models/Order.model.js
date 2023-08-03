// models/User.js

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const orderSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    hours: {
      type: String,
      required: true
    },
    minutes: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    birthCity: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    whatsapp: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    payment_id: {
      type: String
    },
    payment_request_id: {
      type: String
    },
    payment_status: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;
