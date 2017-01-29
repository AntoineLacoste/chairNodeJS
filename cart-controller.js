'use strict';

//handle the cart page
angular.module('chairApp')
.controller('CartController', ['$scope', '$rootScope', 'localStorage', '$http', function ($scope, $rootScope, localStorage, $http) {
	var cart = 'cart';
<<<<<<< Updated upstream
=======
	var apiURL = 'http://localhost:1337/api';

>>>>>>> Stashed changes
	$scope.cart = localStorage.get(cart);
	$scope.form = {};
	$scope.form.titulary = "JOJO";
	$scope.form.number = 2343435151311254;
	$scope.form.expiration = "16/05/2017";

	$scope.form.cryptogram = '456';

<<<<<<< Updated upstream
	// Création de la modal
	$(document).ready(function(){
		$('.modal').modal({
			dismissible: true, 
			opacity: .5,
			outDuration: 200,
			inDuration: 300,
			startingTop: '4%',
			endingTop: '10%'
		});
	});

	// Suppression d'un item du panier
=======
	//dlete an item from the cart
>>>>>>> Stashed changes
	$scope.deleteItem = function(reference){
		localStorage.remove(reference);
		$scope.cart = localStorage.get(cart);
		$scope.numberOfItems = localStorage.getNumberOfItems();
	};

<<<<<<< Updated upstream
	// Misa à jour de la quantité sur un produit
=======
	//refresh the cart based on the local storage
>>>>>>> Stashed changes
	$scope.refreshCart = function(reference, qty){
		localStorage.refresh(reference, qty);
		$scope.numberOfItems = localStorage.getNumberOfItems();
	};

	//send paiement request to the server
	$scope.pay = function(){
		$http.post($rootScope.apiURL + '/paiment',$scope.form).then(function(res){
			$scope.validOrder = res.data.valid;
			if( res.data.valid ){
				$('#modal1').modal('open');
			}
			else{
				$scope.checkoutErrorMessage = res.data.message;
				$('#modal1').modal('open');
			}
		}, function(err){
			console.log('Erreur : ' + err);
		});
	}

}]);