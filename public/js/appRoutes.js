angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// attract screen
		.when('/', {
			templateUrl: 'views/attract.html',
			controller: 'AttractController'
		})

		// intro screen
		.when('/intro', {
			templateUrl: 'views/intro.html',
			controller: 'IntroController'
		})

		// choose screen
		.when('/choose', {
			templateUrl: 'views/choose.html',
			controller: 'ChooseController'
		})

		// information screen
		.when('/info', {
			templateUrl: 'views/info.html',
			controller: 'InfoController'
		})

		// start screen
		.when('/start', {
			templateUrl: 'views/start.html',
			controller: 'StartController'
		})

		// challenge screen
		.when('/challenge', {
			templateUrl: 'views/challenge.html',
			controller: 'ChallengeController'
		})
		
		// last screen
		.when('/last', {
			templateUrl: 'views/last.html',
			controller: 'LastController'
		});

	$locationProvider.html5Mode(true);

}]);