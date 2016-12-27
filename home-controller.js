'use strict';

angular.module('chairApp')
.controller('HomeController', ['$scope', 'fakeHttp', 'routing', 'localStorage', function ($scope, fakeHttp, routing, localStorage) {
	
	// Initialisation de l'application
	localStorage.init();
	var cart = 'cart';
	
	$scope.itemsToDisplay = [];

	fakeHttp.get('/article/getallchairs').then(function(response){
		$scope.itemsToDisplay = response.data.chairs;
	}, function(error){
		console.log(error);
	});

	$scope.goTo = function(reference){
		routing.changeURL(reference);
	}

	$scope.add = function(){
		localStorage.set(45);
	}
	$scope.add2 = function(){
		localStorage.set(2);
	}
	$scope.get = function(){
		console.log(localStorage.get(cart));
	}

}]);