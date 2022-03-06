const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: String,
  proposals: [{proposalId: String}],
  code: String,
  user_to_points: {userId: String, points: Number},
  description: String,
});

// compile model from schema
module.exports = mongoose.model("group", GroupSchema);
