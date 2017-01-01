'use strict';

angular.module('chairApp')
.controller('CartController', ['$scope', 'fakeHttp', 'routing', 'localStorage', function ($scope, fakeHttp, routing, localStorage) {

	var cart = 'cart';
	$scope.cart = localStorage.get(cart);
	$scope.test = 13;

	$scope.deleteItem = function(reference){
		localStorage.remove(reference);
		$scope.apply();
	};

	$scope.refreshCart = function(reference, qty){
		localStorage.refresh(reference, qty);
		$scope.apply();
	};

}]);