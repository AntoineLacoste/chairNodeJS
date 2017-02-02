'use strict';

angular.module('cartPageModule', ['ngRoute'])
    .component('cartPage', {
        templateUrl: 'cart-page/cart.html',
        controller: 'CartController',
    });

angular.module('cartPageModule')
    .controller('CartController', ['$scope', '$rootScope', 'localStorage', '$http', function ($scope, $rootScope, localStorage, $http) {
        var cart = 'cart';
        $scope.cart = localStorage.get(cart);
        $scope.form = {};
        $scope.form.titulary = "JOJO";
        $scope.form.number = 2343435151311254;
        $scope.form.expiration = "16/05/2017";

        $scope.form.cryptogram = '456';

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
        $scope.deleteItem = function(reference){
            localStorage.remove(reference);
            $scope.cart = localStorage.get(cart);
            $scope.numberOfItems = localStorage.getNumberOfItems();
        };

        // Misa à jour de la quantité sur un produit
        $scope.refreshCart = function(reference, qty){
            localStorage.refresh(reference, qty);
            $scope.numberOfItems = localStorage.getNumberOfItems();
        };

        $scope.pay = function(){
            var info = {
                paiment: $scope.form,
                cart: $scope.cart
            };
            $http.post($rootScope.apiURL + '/paiment', info).then(function(res){
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