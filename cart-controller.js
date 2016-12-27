'use strict';

angular.module('chairApp')
.controller('CartController', ['$scope', 'fakeHttp', 'routing', 'localStorage', function ($scope, fakeHttp, routing, localStorage) {

	var cart = 'cart';
	$scope.cart = localStorage.get(cart);

	// for (var i=0; i<LS.length; i++) {
	// 	console.log('ID : ' + LS[i].id);
	// 	console.log('QTY : ' + LS[i].qty);
	// }

	fakeHttp.get('/article/getallchairs').then(function(response){
		$scope.itemsToDisplay = response.data.chairs;
		// console.log($scope.itemsToDisplay);
	}, function(error){
		console.log(error);
	});

}]);