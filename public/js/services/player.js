angular.module('PlayerService', []).factory('Player', ['$http', function($http) {

	return {
		// call to get all players
		get : function() {
			return $http.get('/api/player/read/');
		},
		
		// call to POST and create a new player
		create : function(dataPlayer) {
			return $http.post('/api/player/create/', dataPlayer);
		}
	};

}]);