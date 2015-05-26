// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define our player model
// module.exports allows us to pass this to other files when it is called

var ClickSchema = new Schema({
	player_id: Number, // common unix time stamp
	photo_name: String, // challenge bg image
	time_stamp: Number, // seconds
	x_position: Number, // x pos of target image relative to bg image / game board
	y_position: Number, // y pos of target image relative to bg image / game board
	success: Number // 0 or 1
});

module.exports = mongoose.model('Click', ClickSchema);
