'use strict';

angular.module('chairApp')
.controller('CartController', ['$scope', 'fakeHttp', 'routing', 'localStorage', function ($scope, fakeHttp, routing, localStorage) {

	var cart = 'cart';
	$scope.cart = localStorage.get(cart);
	$scope.form = {};

	$scope.deleteItem = function(reference){
		localStorage.remove(reference);
	};

	$scope.refreshCart = function(reference, qty){
		localStorage.refresh(reference, qty);
	};

	$scope.pay = function(){
		console.log('Commande passée');
		console.log($scope.form);
	}

}]);