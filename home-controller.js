'use strict';

angular.module('chairApp')
.controller('HomeController', ['$scope', 'fakeHttp', 'routing', 'localStorage', function ($scope, fakeHttp, routing, localStorage) {

	// Variables globales
	var cart = 'cart';
	
	$scope.itemsInCart = localStorage.get(cart);
	$scope.itemsToDisplay = [];

	fakeHttp.get('/article/getallchairs').then(function(response){
		$scope.itemsToDisplay = response.data.chairs;
		// console.log($scope.itemsToDisplay);
	}, function(error){
		console.log(error);
	});

	$scope.goTo = function(reference){
		console.log('couuco');
		routing.changeURL(reference);
	}

	// $scope.add = function(){
	// 	localStorage.set(45);
	// }
	// $scope.add2 = function(){
	// 	localStorage.set(2);
	// }
	// $scope.get = function(){
	// 	console.log(localStorage.get(cart));
	// }

}]);