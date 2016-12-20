'use strict';

angular.module('chairApp')
.service('routing', ['$location', function($location) {

	this.changeURL = function(path){
		if(path === 'cart'){
			$location.path('/cart');			
		}
		else{
			$location.path('/article/' + path);			
		}
	}

}]);
