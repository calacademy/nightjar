angular.module('nightjarApp',
	['ngRoute',
	'appRoutes',
	'NightjarCtrl',
	'NightjarService',
	'AttractCtrl',
	'IntroCtrl',
	'ChooseCtrl',
	'InfoCtrl',
	'StartCtrl',
	'ChallengeCtrl',
	'LastCtrl',
	'PlayerService',
	'ClickService'
]);

// GLOBAL VARS FOR THE APP

// challenge sets
var challengesSetRandomMonkey;
var challengesSetRandomMongoose;

// game activity tracking for fallback to attract screen
var date_game_active;
var timer_game_active;

// how many challenges will be used from total set of images assets
var how_many_challenges = 10;

// in case  we want to test removal of info gathering screen
// change this var to true
var no_info_screen = false;

// common id for each set of game data saved
// whether game is completed by player or not.
//var playerID;

// how long before game redirects back to attract mode
// modified during gameplay of challenge view controller
var base_seconds_to_attract = 20000;
//var base_seconds_to_attract = 20000000;
var seconds_to_attract = base_seconds_to_attract;