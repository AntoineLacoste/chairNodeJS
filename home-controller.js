'use strict';

angular.module('chairApp')
.controller('HomeController', ['$scope', 'fakeHttp', '$location', function ($scope, fakeHttp, $location) {
	// Variables globales
	$scope.itemsInCart = [];
	$scope.itemsToDisplay = [];

	fakeHttp.get('/article/getallchairs').then(function(response){
		$scope.itemsToDisplay = response.data.chairs;
		// console.log($scope.itemsToDisplay);
	}, function(error){
		console.log(error);
	});

	$scope.goTo = function(reference){
		$location.path('/article/' + reference);
	}

}]);