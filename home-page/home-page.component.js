'use strict';

angular.module('homePageModule', ['ngRoute'])
    .component('homePage', {
        templateUrl: 'home-page/home.html',
        controller: 'HomeController',
    });

angular.module('homePageModule')
    .controller('HomeController', ['$scope', 'routing', 'localStorage', '$http', '$rootScope', function ($scope, routing, localStorage, $http, $rootScope) {

        // Initialisation du localStorage
        localStorage.init();
        var cart = 'cart';

        $scope.itemsToDisplay = [];

        $http.get( $rootScope.apiURL + '/chairs' ).then( function(res){
            $scope.itemsToDisplay = res.data.data;
            // Stockage de tous les items pour la recherche
            $rootScope.items = res.data.data;
        }, function(error){
            console.log(error);
        });

        $scope.goTo = function(reference){
            routing.changeURL(reference);
        };

        $scope.get = function(){
            console.log(localStorage.get(cart));
        };

    }]);