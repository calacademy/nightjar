angular.module('AttractCtrl', []).controller('AttractController', function(Player, Click, Nightjar, $scope, $location) {

	// back to default attract mode timeout
	seconds_to_attract = base_seconds_to_attract;

	// if unifinished game data exists (at least one challenge completed), save it
	if (localStorage.getItem("nightjar_challenge_1_attempt_1")) {
		Nightjar.saveGameData(Player, Click);
		// saveGameData function clears local storage when complete
	} else {
		localStorage.clear();
	}

	// clear timer for inactivity attract mode fallback since we're in attract mode
	clearInterval(timer_game_active);

	// attract mode animation timers
	var timer_attract_bird;
	var timer_attract_copy;
	var timer_attract_bg;
	
  function fadeInOutBackground() {
		var background = $('#attract_bg');
		background.fadeIn(3000).delay(4000).fadeOut(2000, function() {
			timer_attract_bg = setTimeout(fadeInOutBackground, 6000);
		});
	}
  fadeInOutBackground();

  function fadeInOutCopy() {
		var copy = $('#attract_copy');
		copy.fadeIn(3000).delay(9000).fadeOut(2000, function() {
			timer_attract_copy = setTimeout(fadeInOutCopy, 1000);
		});
	}
  fadeInOutCopy();

	function fadeInOutBird() {
		var bird = $('#attract_bird');
		bird.fadeIn(3000).delay(9000).fadeOut(2000, function() {
			timer_attract_bird = setTimeout(fadeInOutBird, 1000);
		});
	}
  fadeInOutBird();
	
	$scope.next = function() {
		playAudioTap();
		clearTimeout(timer_attract_bird);
		clearTimeout(timer_attract_copy);
		clearTimeout(timer_attract_bg);
		$location.path('intro');
	};

});
