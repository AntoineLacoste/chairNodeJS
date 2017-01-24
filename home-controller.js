'use strict';

angular.module('chairApp')
.controller('HomeController', ['$scope', 'routing', 'localStorage', '$http', function ($scope, routing, localStorage, $http) {
	
	// Initialisation de l'application
	localStorage.init();
	var cart = 'cart';
	var apiURL = 'http://localhost:1337/api';
	
	$scope.itemsToDisplay = [];

	$http.get( apiURL + '/chairs' ).then( function(res){
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