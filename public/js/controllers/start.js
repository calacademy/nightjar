angular.module('StartCtrl', []).controller('StartController', function(Nightjar, $scope, $location) {

	// inactivity service call
	clearInterval(timer_game_active);
	Nightjar.dateGameActive();
	timer_game_active = setInterval(Nightjar.checkGameActivity, 10000);

	jQuery('#start button').show();

	$scope.next = function() {
		playAudioTap();
		Nightjar.dateGameActive();
		$location.path('challenge');
	};

});
