
angular.module('NightjarService', []).factory('Nightjar', [function() {
  
	return {

		dateGameActive : function() {
			date_game_active = new Date();
		},

		checkGameActivity : function() {
			var now = new Date();
			// if date_game_active is more than seconds_to_attract older than now, go to attract
			var diff_time = now - date_game_active;
			if (diff_time > seconds_to_attract) {
				clearInterval(timer_game_active);
				stopAudioAmbient();
				attract_redirect = setTimeout(function() { window.location.href = '/'; }, 1000);
			}
		},

		saveGameData : function(Player, Click) {

			// data objects for server create below
	
			var dataPlayer = {};
			var dataClicks = {};

			playerID = new Date();
			playerID = Date.parse(playerID) / 1000;
			dataPlayer.player_id = playerID;

			for (var i = 0; i < localStorage.length; i++) {
		
				var key = localStorage.key(i);
				var val = localStorage.getItem(localStorage.key(i));

				if (key.indexOf('nightjar_challenge') === 0) {
					//challenge local storage in JSON
					var json = JSON.parse(val);
					// build clicks data object
					dataClicks[key] = json;
					dataClicks[key].player_id = playerID;
				} else

				// add on to player object
				if (key.indexOf('nightjar_choice') === 0) {
					dataPlayer.species = val;
				} else

				if (key.indexOf('nightjar_age') === 0) {
					dataPlayer.age_range = val;
				} else

				if (key.indexOf('nightjar_played_before') === 0) {
					dataPlayer.played_before = val;
				}

			}

			Player.create(dataPlayer).success(function(dataPlayer){
				//assign value
				//console.log('DB player record created');
			}).error(function(){
				//console.log('DB player create error');
			});

			Click.create(dataClicks).success(function(dataClicks){
				//assign value
				//console.log('DB clicks record created');
			}).error(function(){
				//console.log('DB clicks create error');
			});

			localStorage.clear();

		}

	};
        
}]);
