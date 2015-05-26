angular.module('IntroCtrl', []).controller('IntroController', function(Nightjar, $scope, $location, $rootScope) {

	// inactivity service call
	clearInterval(timer_game_active);
	Nightjar.dateGameActive();
	timer_game_active = setInterval(Nightjar.checkGameActivity, 10000);

	jQuery('#intro button').show();

	$scope.next = function() {
		playAudioTap();
		Nightjar.dateGameActive();
		$location.path('choose');
	};

});
