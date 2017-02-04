'use strict';

angular.module('cartPageModule', ['ngRoute'])
.component('cartPage', {
    templateUrl: 'cart-page/cart.html',
    controller: 'CartController',
});

angular.module('cartPageModule')
.controller('CartController', ['$scope', '$rootScope', 'localStorage', '$http', function ($scope, $rootScope, localStorage, $http) {

    // Initialization variable
    var cart = 'cart';
    $scope.cart = localStorage.get(cart);
    $scope.form = {};
    $scope.form.titulary = "JOJO";
    $scope.form.number = 2343435151311254;
    $scope.form.expiration = "16/05/2017";
    $scope.form.cryptogram = '456';

        // Creationf of the modal
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

        // Delete item from the cart
        $scope.deleteItem = function(reference){
            localStorage.remove(reference);
            $scope.cart = localStorage.get(cart);
            $scope.numberOfItems = localStorage.getNumberOfItems();
        };

        // Refresh item quantity
        $scope.refreshCart = function(reference, qty){
            localStorage.refresh(reference, qty);
            $scope.numberOfItems = localStorage.getNumberOfItems();
        };

        // Payment
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