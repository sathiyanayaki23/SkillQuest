const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    email: { type: String, required: true },
    query: { type: String, required: true },
  });

  const contact = mongoose.model("Contact", contactSchema);

  module.exports = {contact};