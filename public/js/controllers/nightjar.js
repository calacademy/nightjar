angular.module('NightjarCtrl', []).controller('NightjarController', function() {

	var DurstenfeldShuffle = function(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	};

	// load array of challenge objects for monkey game
	var challengesSetOrigMonkey = [
		{
			image_name: 'monkey-Reflectance_CF007_V_rgb_0.61-r.jpg',
			target_image_name: 'monkey-Reflectance_CF007_V_rgb_0.61-r-TARGET.png',
			target_x_pos: '625',
			target_y_pos: '389'
		},
		{
			image_name: 'monkey-Reflectance_CF008_V_rgb_0.41-r.jpg',
			target_image_name: 'monkey-Reflectance_CF008_V_rgb_0.41-r-TARGET.png',
			target_x_pos: '836',
			target_y_pos: '388'
		},
		{
			image_name: 'monkey-Reflectance_CF012_V_rgb_0.41-r.jpg',
			target_image_name: 'monkey-Reflectance_CF012_V_rgb_0.41-r-TARGET.png',
			target_x_pos: '887',
			target_y_pos: '636'
		},
		{
			image_name: 'monkey-Reflectance_CF015_V_rgb_0.65-r.jpg',
			target_image_name: 'monkey-Reflectance_CF015_V_rgb_0.65-r-TARGET.png',
			target_x_pos: '728',
			target_y_pos: '681'
		},
		{
			image_name: 'monkey-Reflectance_CF020_V_rgb_0.47-r.jpg',
			target_image_name: 'monkey-Reflectance_CF020_V_rgb_0.47-r-TARGET.png',
			target_x_pos: '602',
			target_y_pos: '558'
		},
		{
			image_name: 'monkey-Reflectance_CF021_V_rgb_0.52-r.jpg',
			target_image_name: 'monkey-Reflectance_CF021_V_rgb_0.52-r-TARGET.png',
			target_x_pos: '506',
			target_y_pos: '468'
		},
		{
			image_name: 'monkey-Reflectance_CF022_V_rgb_0.52-r.jpg',
			target_image_name: 'monkey-Reflectance_CF022_V_rgb_0.52-r-TARGET.png',
			target_x_pos: '572',
			target_y_pos: '351'
		},
		{
			image_name: 'monkey-Reflectance_CF027_V_rgb_0.45-r.jpg',
			target_image_name: 'monkey-Reflectance_CF027_V_rgb_0.45-r-TARGET.png',
			target_x_pos: '1127',
			target_y_pos: '327'
		},
		{
			image_name: 'monkey-Reflectance_CF032_V_rgb_0.58-r.jpg',
			target_image_name: 'monkey-Reflectance_CF032_V_rgb_0.58-r-TARGET.png',
			target_x_pos: '1104',
			target_y_pos: '697'
		},
		{
			image_name: 'monkey-Reflectance_CF036_V_rgb_0.48-r.jpg',
			target_image_name: 'monkey-Reflectance_CF036_V_rgb_0.48-r-TARGET.png',
			target_x_pos: '786',
			target_y_pos: '562'
		},
		{
			image_name: 'monkey-Reflectance_CP020_V_rgb_0.44-r.jpg',
			target_image_name: 'monkey-Reflectance_CP020_V_rgb_0.44-r-TARGET.png',
			target_x_pos: '597',
			target_y_pos: '709'
		},
		{
			image_name: 'monkey-Reflectance_MV002_V_rgb_0.54-r.jpg',
			target_image_name: 'monkey-Reflectance_MV002_V_rgb_0.54-r-TARGET.png',
			target_x_pos: '459',
			target_y_pos: '699'
		},
		{
			image_name: 'monkey-Reflectance_MV004_V_rgb_0.40-r.jpg',
			target_image_name: 'monkey-Reflectance_MV004_V_rgb_0.40-r-TARGET.png',
			target_x_pos: '598',
			target_y_pos: '288'
		},
		{
			image_name: 'monkey-Reflectance_MV005_V_rgb_0.55-r.jpg',
			target_image_name: 'monkey-Reflectance_MV005_V_rgb_0.55-r-TARGET.png',
			target_x_pos: '977',
			target_y_pos: '700'
		},
		{
			image_name: 'monkey-Reflectance_MV006_V_rgb_0.44-r.jpg',
			target_image_name: 'monkey-Reflectance_MV006_V_rgb_0.44-r-TARGET.png',
			target_x_pos: '629',
			target_y_pos: '460'
		}
	];

	// load array of challenge objects for mongoose game
	var challengesSetOrigMongoose = [
		{
			image_name: 'mongoose-Reflectance_CF007_V_rgb_0.61-r.jpg',
			target_image_name: 'mongoose-Reflectance_CF007_V_rgb_0.61-r-TARGET.png',
			target_x_pos: '624',
			target_y_pos: '389'
		},
		{
			image_name: 'mongoose-Reflectance_CF008_V_rgb_0.41-r.jpg',
			target_image_name: 'mongoose-Reflectance_CF008_V_rgb_0.41-r-TARGET.png',
			target_x_pos: '836',
			target_y_pos: '388'
		},
		{
			image_name: 'mongoose-Reflectance_CF012_V_rgb_0.41-r.jpg',
			target_image_name: 'mongoose-Reflectance_CF012_V_rgb_0.41-r-TARGET.png',
			target_x_pos: '888',
			target_y_pos: '636'
		},
		{
			image_name: 'mongoose-Reflectance_CF015_V_rgb_0.65-r.jpg',
			target_image_name: 'mongoose-Reflectance_CF015_V_rgb_0.65-r-TARGET.png',
			target_x_pos: '728',
			target_y_pos: '681'
		},
		{
			image_name: 'mongoose-Reflectance_CF020_V_rgb_0.47-r.jpg',
			target_image_name: 'mongoose-Reflectance_CF020_V_rgb_0.47-r-TARGET.png',
			target_x_pos: '602',
			target_y_pos: '558'
		},
		{
			image_name: 'mongoose-Reflectance_CF021_V_rgb_0.52-r.jpg',
			target_image_name: 'mongoose-Reflectance_CF021_V_rgb_0.52-r-TARGET.png',
			target_x_pos: '506',
			target_y_pos: '468'
		},
		{
			image_name: 'mongoose-Reflectance_CF022_V_rgb_0.52-r.jpg',
			target_image_name: 'mongoose-Reflectance_CF022_V_rgb_0.52-r-TARGET.png',
			target_x_pos: '572',
			target_y_pos: '351'
		},
		{
			image_name: 'mongoose-Reflectance_CF027_V_rgb_0.45-r.jpg',
			target_image_name: 'mongoose-Reflectance_CF027_V_rgb_0.45-r-TARGET.png',
			target_x_pos: '1127',
			target_y_pos: '328'
		},
		{
			image_name: 'mongoose-Reflectance_CF032_V_rgb_0.58-r.jpg',
			target_image_name: 'mongoose-Reflectance_CF032_V_rgb_0.58-r-TARGET.png',
			target_x_pos: '1104',
			target_y_pos: '698'
		},
		{
			image_name: 'mongoose-Reflectance_CF036_V_rgb_0.48-r.jpg',
			target_image_name: 'mongoose-Reflectance_CF036_V_rgb_0.48-r-TARGET.png',
			target_x_pos: '787',
			target_y_pos: '562'
		},
		{
			image_name: 'mongoose-Reflectance_CP020_V_rgb_0.44-r.jpg',
			target_image_name: 'mongoose-Reflectance_CP020_V_rgb_0.44-r-TARGET.png',
			target_x_pos: '597',
			target_y_pos: '709'
		},
		{
			image_name: 'mongoose-Reflectance_MV002_V_rgb_0.54-r.jpg',
			target_image_name: 'mongoose-Reflectance_MV002_V_rgb_0.54-r-TARGET.png',
			target_x_pos: '459',
			target_y_pos: '699'
		},
		{
			image_name: 'mongoose-Reflectance_MV004_V_rgb_0.40-r.jpg',
			target_image_name: 'mongoose-Reflectance_MV004_V_rgb_0.40-r-TARGET.png',
			target_x_pos: '598',
			target_y_pos: '288'
		},
		{
			image_name: 'mongoose-Reflectance_MV005_V_rgb_0.55-r.jpg',
			target_image_name: 'mongoose-Reflectance_MV005_V_rgb_0.55-r-TARGET.png',
			target_x_pos: '977',
			target_y_pos: '701'
		},
		{
			image_name: 'mongoose-Reflectance_MV006_V_rgb_0.44-r.jpg',
			target_image_name: 'mongoose-Reflectance_MV006_V_rgb_0.44-r-TARGET.png',
			target_x_pos: '630',
			target_y_pos: '462'
		}
	];

	// randomize array of challenge objects
	challengesSetRandomMonkey = DurstenfeldShuffle(challengesSetOrigMonkey);
	challengesSetRandomMongoose = DurstenfeldShuffle(challengesSetOrigMongoose);
	//challengesSetRandomMonkey = challengesSetOrigMonkey;
	//challengesSetRandomMongoose = challengesSetOrigMongoose;

	var count_monkey = challengesSetRandomMonkey.length;
	var count_mongoose = challengesSetRandomMongoose.length;

	var diff_monkey = count_monkey - how_many_challenges;
	var diff_mongoose = count_mongoose - how_many_challenges;

	// trim randomized array to number of challenges used in game
	challengesSetRandomMonkey.splice(how_many_challenges, diff_monkey);
	challengesSetRandomMongoose.splice(how_many_challenges, diff_mongoose);

});
