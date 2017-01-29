'use strict';

//Controller which handle the article page
angular.module('chairApp')
    .controller('ArticleController', ['$scope', '$http', '$routeParams', 'localStorage', '$rootScope', function ($scope, $http, $routeParams, localStorage, $rootScope) {
        
        $http.get( $rootScope.apiURL + '/chairs/' + $routeParams.reference).then(
            function (response) {
                $scope.article = response.data.data[0];
                console.log($scope.article);
            },
            function (error) {
                console.log(error);
            }
        );

        //add the article to the cart
        $scope.addToCart = function () {
            localStorage.set($scope.article);
            $scope.numberOfItems = localStorage.getNumberOfItems();
        };
    }]);