'use strict';

angular.module('chairApp')
.controller('CartController', ['$scope', '$rootScope', 'localStorage', '$http', function ($scope, $rootScope, localStorage, $http) {
	var cart = 'cart';
	$scope.cart = localStorage.get(cart);
	$scope.form = {};
	$scope.form.titulary = "JOJO";
	$scope.form.number = 2343435151311254;
	$scope.form.expiration = "16/05/2017";
	$scope.form.cryptogram = '456';

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
		$http.post($rootScope.apiURL + '/paiment',$scope.form).then(function(res){
			if( res.data.valid ){
			}
			else{
				console.log("Erreur : " +  res.data.message);
			}
		}, function(err){
			console.log('Erreur : ' + err);
		});
	}

}]);