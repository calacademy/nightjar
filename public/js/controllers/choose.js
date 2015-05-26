angular.module('ChooseCtrl', []).controller('ChooseController', function(Nightjar, $scope, $location) {

	// inactivity service call
	clearInterval(timer_game_active);
	Nightjar.dateGameActive();
	timer_game_active = setInterval(Nightjar.checkGameActivity, 10000);

	jQuery('#choose button').show();

	$scope.next = function(choice) {
		playAudioTap();
		Nightjar.dateGameActive();
		localStorage.setItem("nightjar_choice", choice);
		if (no_info_screen === false) {
			$location.path('info');
		} else {
			$location.path('start');
		}
	};

});
