// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define our player model
// module.exports allows us to pass this to other files when it is called

var PlayerSchema = new Schema({
	player_id: Number,
	species: String,
	played_before: Number,
	age_range: String
});

module.exports = mongoose.model('Player', PlayerSchema);
