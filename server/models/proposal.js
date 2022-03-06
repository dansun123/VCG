const mongoose = require("mongoose");

const ProposalSchema = new mongoose.Schema({
  name: String,
  type: String,
  user_to_bid: {userId: String, bid: Number},
  end_date: Date,
});

// compile model from schema
module.exports = mongoose.model("proposal", ProposalSchema);
