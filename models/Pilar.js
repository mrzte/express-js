const mongoose = require('mongoose');

const PilarSchema = mongoose.Schema({
  pilar: {
    type:String,
    required: true
  },
  deskripsi: {
    type:String,
    required: true
  },
});

module.exports = mongoose.model('Pilar',PilarSchema);
