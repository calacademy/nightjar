// grab the player model we just created
var Player = require('./models/Player');
var Click = require('./models/Click');

module.exports = function(app) {

	// server routes (e.g., for api calls) ====================================

	// GET
	app.get('/api/player/read/', function(req, res) {
	// use mongoose to get all players in the database
		Player.find(function(err, players) {
			// if there is an error retrieving, send the error. 
			// nothing after res.send(err) will execute
			if (err)
			res.send(err);
			res.json(players); // return all players in JSON format
		});
	});

	// CREATE
	app.post('/api/player/create/', function(req, res) {
		var player = new Player();
		player.player_id = req.body.player_id;
		player.species = req.body.species;
		player.played_before = req.body.played_before;
		player.age_range = req.body.age_range;
		// save the player and check for errors
		player.save(function(err) {
			if (err)
			res.send(err);
			res.json({ message: 'Player record created!' });
		});

	});

	app.post('/api/click/create/', function(req, res) {
		
		var key;
		for(key in req.body) {
			if(req.body.hasOwnProperty(key)) {
				saveClick(req.body[key]);
			}
		}

		function saveClick(foobar) {

			var click = new Click();
			click.player_id = foobar.player_id;
			click.photo_name = foobar.image;
			click.time_stamp = foobar.seconds;
			click.x_position = foobar.xpos;
			click.y_position = foobar.ypos;
			click.success = foobar.success;
			// save the click and check for errors
			click.save(function(err, results) {
				if (err) {
					next(err);
				} else {
					res.end(JSON.stringify(results));
				}
			});

		}

	});

	// frontend routes ========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('index.html', { root: './public' }); // load our public/index.html file
	});

};