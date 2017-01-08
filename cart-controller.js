'use strict';

angular.module('chairApp')
.controller('CartController', ['$scope', 'fakeHttp', 'routing', 'localStorage', function ($scope, fakeHttp, routing, localStorage) {

	var cart = 'cart';
	$scope.cart = localStorage.get(cart);
	$scope.form = {};

	$scope.deleteItem = function(reference){
		localStorage.remove(reference);
		$scope.cart = localStorage.get(cart);
		$scope.numberOfItems = localStorage.getNumberOfItems();
	};

	$scope.refreshCart = function(reference, qty){
		localStorage.refresh(reference, qty);
		$scope.numberOfItems = localStorage.getNumberOfItems();
	};

	$scope.pay = function(){
		console.log('Commande passée');
		console.log($scope.form);
	}

}]);