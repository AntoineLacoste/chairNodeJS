'use strict';

angular.module('chairApp')
.controller('HomeController', ['$scope', 'routing', 'localStorage', '$http', '$rootScope', function ($scope, routing, localStorage, $http, $rootScope) {
	
	// Initialisation de l'application
	localStorage.init();
	var cart = 'cart';
	
	$scope.itemsToDisplay = [];

	$http.get( $rootScope.apiURL + '/chairs' ).then( function(res){
		$scope.itemsToDisplay = res.data.data;
	}, function(error){
		console.log(error);
	});

	$scope.goTo = function(reference){
		routing.changeURL(reference);
	}

	$scope.get = function(){
		console.log(localStorage.get(cart));
	}

}]);