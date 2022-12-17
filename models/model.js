const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  code: {
    required: true,
    type: String,
  },

  name: {
    required: true,
    type: String,
  },

  sex: {
    required: true,
    type: String,
  },

  phone: {
    required: true,
    type: String,
  },

  email: {
    required: true,
    type: String,
  },

  appointmentDate: {
    required: true,
    type: String,
  },

  firstTime: {
    required: true,
    type: Boolean,
  },

  requestDate: {
    required: true,
    type: String,
  },

  appointmentStatus: {
    required: true,
    type: String,
  },

  appointmentTime: {
    required: true,
    type: String,
  },

  address: {
    required: true,
    type: String,
  },

  city: {
    required: true,
    type: String,
  },

  notesBefore: {
    required: true,
    type: String,
  },

  notesAfter: {
    type: String,
    },
  
});

module.exports = mongoose.model("Data", dataSchema);