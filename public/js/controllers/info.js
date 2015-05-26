angular.module('InfoCtrl', []).controller('InfoController', function(Nightjar, $scope, $location, $route) {

	// inactivity service call
	clearInterval(timer_game_active);
	Nightjar.dateGameActive();
	timer_game_active = setInterval(Nightjar.checkGameActivity, 10000);

	jQuery('#info #question1').show();
	jQuery('#info #question1 button').show();
	//jQuery('#info #footer').show();
	jQuery('#info .footer button').show();

	$scope.age = function($event) {
		playAudioTap();
		Nightjar.dateGameActive();
		localStorage.setItem("nightjar_age", $event.target.value);
		jQuery('#info #question2').show();
		jQuery('#info #question2 button').show();
		jQuery($event.target).parent().children('button').removeClass('btn_highlight');
		jQuery($event.target).addClass('btn_highlight');
	};

	$scope.playedbefore = function($event) {
		playAudioTap();
		Nightjar.dateGameActive();
		localStorage.setItem("nightjar_played_before", $event.target.value);
		jQuery('#btn_play_game').show();
		jQuery($event.target).parent().children('button').removeClass('btn_highlight');
		jQuery($event.target).addClass('btn_highlight');
	};

	$scope.next = function() {
		playAudioTap();
		Nightjar.dateGameActive();
		$location.path('start');
	};

	$scope.exit = function() {
		playAudioTap();
		Nightjar.dateGameActive();
		$location.path('intro');
	};

});
