'use strict';

angular.module('chairApp')
.controller('HomeController', ['$scope', 'fakeHttp', function ($scope, fakeHttp) {
	// Variables globales
	$scope.itemsInCart = [];
	$scope.itemsToDisplay = [];

	fakeHttp.get('/chair/getallchairs').then(function(response){
		$scope.itemsToDisplay = response.data.chairs;
		console.log($scope.itemsToDisplay);
	}, function(error){
		console.log(error);
	});

}]);