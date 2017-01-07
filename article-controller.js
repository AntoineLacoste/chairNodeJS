'use strict';

angular.module('chairApp')
    .controller('ArticleController', ['$scope', 'fakeHttp', '$routeParams', 'localStorage', function ($scope, fakeHttp, $routeParams, localStorage) {
        // Variables globales
        fakeHttp.get('/article/' + $routeParams.reference).then(
            function (response) {
                $scope.article = response.data;
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