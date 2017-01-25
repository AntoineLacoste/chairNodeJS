'use strict';

angular.module('chairApp')
.controller('CartController', ['$scope', 'localStorage', '$http', function ($scope, localStorage, $http) {

	var cart = 'cart';
	var apiURL = 'http://localhost:1337/api';
	$scope.cart = localStorage.get(cart);
	$scope.form = {};
	// $scope.form.titulary = "JOJO";
	// $scope.form.number = 23434351513;
	// $scope.form.expiration = "16/05/2017";
	// $scope.form.cryptogram = '';

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
		$http.post(apiURL + '/paiment',$scope.form).then(function(res){
			if( res.data.valid ){
				console.log('Commande validée');
			}
			else{
				console.log("Erreur : " +  res.data.message);
			}
		}, function(err){
			console.log('Erreur : ' + err);
		});
	}

}]);