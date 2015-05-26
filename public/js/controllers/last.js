angular.module('LastCtrl', []).controller('LastController', function(Player, Click, Nightjar, $scope, $location) {

	// back to default after challenge mode
	seconds_to_attract = base_seconds_to_attract;

	// inactivity service call
	clearInterval(timer_game_active);
	Nightjar.dateGameActive();
	timer_game_active = setInterval(Nightjar.checkGameActivity, 10000);

	jQuery('#last button').show();

	// show game success time to find target average
	var count = 0;
	var total = 0;

	for (var i = 0; i < localStorage.length; i++) {
		
		var key = localStorage.key(i);
		var val = localStorage.getItem(localStorage.key(i));

		if (key.indexOf('nightjar_challenge') === 0) {
			
			//challenge local storage in JSON
			var json = JSON.parse(val);
			
			// only calculating average time for success message on screen
			if (json.success === 1) {
				count ++;
				total += json.seconds;
			}
		
		}

	}

	if (total === 0) {
		stopAudioAmbient();
		localStorage.clear();
		$location.path('intro');
	}

	var average = total/count;
	average = average.toFixed(2);
	
	jQuery('#last p').html('It took you an average of <strong>' + average + '</strong> seconds to spot nightjars.');

	// save local data to server DB
	Nightjar.saveGameData(Player, Click);

	$scope.next = function() {
		Nightjar.dateGameActive();
		playAudioTap();
		stopAudioAmbient();
		localStorage.clear();
		$location.path('choose');
	};

});
