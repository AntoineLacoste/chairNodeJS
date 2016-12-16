'use strict';

angular.module('chairApp')
.controller('HomeController', ['$scope', 'fakeHttp', function ($scope, fakeHttp) {
	// Variables globales
	$scope.itemsInCart = [];


	console.log($scope.itemsInCart);
	fakeHttp.get('/chair/getallchairs').then(function(response){
		console.log(response);
	}, function(error){
		console.log(error);
	})
}]);