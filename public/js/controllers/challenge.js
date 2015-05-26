angular.module('ChallengeCtrl', []).controller('ChallengeController', function(Nightjar, $scope, $location) {

	// extend how long player can beinactive during gameplay
	seconds_to_attract = 40000;

	// new game new player id
	//playerID = new Date();
	//playerID = Date.parse(playerID) / 1000;

	// inactivity service call
	clearInterval(timer_game_active);
	Nightjar.dateGameActive();
	timer_game_active = setInterval(Nightjar.checkGameActivity, 10000);

	playAudioAmbient();

	jQuery('.btn_cant_find').show();

	var vision = localStorage.getItem("nightjar_choice");

	// use challenge for given choice, and
	if (vision == 'monkey') {
		$scope.challenges = challengesSetRandomMonkey;
	} else {
		$scope.challenges = challengesSetRandomMongoose;
	}

	$scope.challenge_index = 0;
  $scope.challenge = {};

	var challenge_level = 1;
	var attempts = 0;
	var running = true;

	// what to do when time is up for challenge level
	var levelOver = function(success, x, y, hitx, hity, seconds) {
		
		// deactivate challenge clickables/touchables
		running = false;
		// stop timer
		jQuery('.challenge_timer').TimeCircles().stop();
		// hide timer
		jQuery('.challenge_timer').hide();
		jQuery('.container_challenge_timer').hide();
		// hide target
		jQuery('.challenge_target').hide();
		// hide can't find it btn
		jQuery('#btn_cant_find_it').hide();

		if (success === 1) {
			
			// show "nice find" touch spot

			// user touch info
			var touchX = hitx - 105; // subtract half the size of the circle
			var touchY = hity - 105;
			
			var hit_pos_x = parseInt(touchX, 10);
			var hit_pos_y = parseInt(touchY, 10);
		
			hit_pos_x = hit_pos_x + 'px';
			hit_pos_y = hit_pos_y + 'px';

			jQuery('.target_hit').css('top', hit_pos_y);
			jQuery('.target_hit').css('left', hit_pos_x);
			jQuery('.target_hit').fadeIn(500).delay(2000).fadeOut("fast", function() {
				
				// show green hit petal

				// insert time info (to 2 dec imal places)
				var how_long = seconds.toFixed(2);
				jQuery('.challenge_time').text(how_long + ' seconds!');

				// insert pager info
				jQuery('.pager').text('(' + challenge_level + '/' + how_many_challenges + ')');

				// flip petal direction based opn monkey or mongoose gameplay
				if (vision == "monkey") {
					jQuery('.petal_hit').addClass('left_big');
				} else {
					jQuery('.petal_hit').addClass('right_big');
				}
				if (challenge_level == how_many_challenges) {
					jQuery('.petal_hit > button').addClass("results");
					jQuery('.petal_hit > button').text("See results");
				}
				jQuery('.petal_hit > button').show();
				jQuery('.petal_hit').delay(1500).fadeIn(500);

			});

		} else {

			// show highlighted bird against gradient background
			jQuery('.challenge_target').show();
			jQuery('.challenge_overlay').show().delay(3000).fadeOut(200, function() {

				// show red miss petal

				// insert pager info
				jQuery('.pager').text('(' + challenge_level + '/' + how_many_challenges + ')');

				// flip petal direction based opn monkey or mongoose gameplay
				if (vision == "monkey") {
					jQuery('.petal_miss').addClass('left_big');
				} else {
					jQuery('.petal_miss').addClass('right_big');
				}
				if (challenge_level == how_many_challenges) {
					jQuery('.petal_miss > button').addClass("results");
					jQuery('.petal_miss > button').text("See results");
				}
				jQuery('.petal_miss > button').show();
				jQuery('.petal_miss').fadeIn(500);


			});

		}

	};

	////////////////
	// miss handling
	////////////////
	// timer for hiding possible repeat show/hide of miss icon
	var timer_hide_miss_icon;

	var hideMissIcon  = function() {
		jQuery('.target_miss').hide();
	};

	// what to do when player misses target
	var missHandler = function(x, y, hitx, hity) {

		jQuery('.target_miss').hide();
		clearTimeout(timer_hide_miss_icon);

		// user touch info
		var touchX = hitx - 105; // subtract half the size of the circle
		var touchY = hity - 105;
		
		var miss_pos_x = parseInt(touchX, 10);
		var miss_pos_y = parseInt(touchY, 10);
	
		miss_pos_x = miss_pos_x + 'px';
		miss_pos_y = miss_pos_y + 'px';

		// show "try again" touch spot
		jQuery('.target_miss').css('top', miss_pos_y);
		jQuery('.target_miss').css('left', miss_pos_x);
		jQuery('.target_miss').show();
		timer_hide_miss_icon = setTimeout(hideMissIcon, 2000);

	};

	//////////////////////////////////////////
	// timer jquery plugin config and callback
	//////////////////////////////////////////
	jQuery('.challenge_timer').TimeCircles({
		time: {
			Days: {
				show: false
			},
			Hours: {
				show: false,
			},
			Minutes: {
				show: false,
			},
			Seconds: {
				show: true,
				text: '',
				color: '#fff'
			}
		},
		total_duration: 30,
		direction: 'Counter-clockwise',
		count_past_zero: false,
	}).addListener(function(unit, value, total) {
		if (total === 0) {
			levelOver(0);
		}
	});

	var getTime = function() {
		var seconds = jQuery('.challenge_timer').TimeCircles().getTime();
		seconds = 30 - seconds;
		return seconds;
	};

	/*
	$scope.$on('$viewContentLoaded', function(){
  });
	*/

	$scope.hit = function(i, event) {
		
		if (running === true) {

			Nightjar.dateGameActive();

			playAudioHit();
			jQuery('.target_miss').hide();
			clearTimeout(timer_hide_miss_icon);

			attempts ++;
			var key = 'nightjar_challenge_' + challenge_level + '_attempt_' +  attempts;
			var target_image = i.target_image_name;
			var x = i.target_x_pos;
			var y = i.target_x_pos;
			var seconds = getTime();
			var success = 1;
			var hitObject = {'image':target_image,'xpos':x,'ypos':y,'seconds':seconds,'success':success };
			localStorage.setItem(key, JSON.stringify(hitObject));
			var hitx = event.clientX;
			var hity = event.clientY;
			levelOver(success, x, y, hitx, hity, seconds);
		}

	};

	$scope.miss = function(i, event) {
		
		if (running === true) {
			
			Nightjar.dateGameActive();

			playAudioMiss();
			attempts ++;
			var key = 'nightjar_challenge_' + challenge_level + '_attempt_' +  attempts;
			var target_image = i.target_image_name;
			var x = i.target_x_pos;
			var y = i.target_x_pos;
			var seconds = getTime();
			var success = 0;
			var hitObject = {'image':target_image,'xpos':x,'ypos':y,'seconds':seconds,'success':success };
			localStorage.setItem(key, JSON.stringify(hitObject));
			var hitx = event.clientX;
			var hity = event.clientY;
			missHandler(x, y, hitx, hity);
		}
	};

	$scope.giveup = function() {
		Nightjar.dateGameActive();
		playAudioTap();
		// just in case recent miss hanging around
		jQuery('.target_miss').hide();
		clearTimeout(timer_hide_miss_icon);
		levelOver(0);
	};

	$scope.next = function() {
		Nightjar.dateGameActive();

		playAudioTap();

		if (challenge_level == how_many_challenges) {
			jQuery('.challenge_timer').TimeCircles().destroy();
			$location.path('last');
		}

		// show can't find it button
		jQuery('#btn_cant_find_it').show();

		// show/start timer
		jQuery('.challenge_timer').show();
		jQuery('.container_challenge_timer').show();
		jQuery('.challenge_timer').TimeCircles().restart();
		
		if ($scope.challenge_index >= $scope.challenges.length -1) {
			$scope.challenge_index = 0;
		} else {
			$scope.challenge_index ++;
		}
		
		// set game play vars as needed
		attempts = 0;
		running = true;
		challenge_level ++;

	};

});