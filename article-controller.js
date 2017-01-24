'use strict';

angular.module('chairApp')
    .controller('ArticleController', ['$scope', '$http', '$routeParams', 'localStorage', function ($scope, $http, $routeParams, localStorage) {
        
        var apiURL = 'http://localhost:1337/api';

        $http.get( apiURL + '/chairs/' + $routeParams.reference).then(
            function (response) {
                $scope.article = response.data.data[0];
                console.log($scope.article);
            },
            function (error) {
                console.log(error);
            }
        );

        $scope.addToCart = function () {
            localStorage.set($scope.article);
            $scope.numberOfItems = localStorage.getNumberOfItems();
        };
    }]);