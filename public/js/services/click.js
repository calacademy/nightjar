angular.module('ClickService', []).factory('Click', ['$http', function($http) {

	return {
		// call to get all clicks
		get : function() {
			return $http.get('/api/click/read/');
		},
		
		// call to POST and create a new click
		create : function(dataClick) {
			return $http.post('/api/click/create/', dataClick);
		}
	};

}]);