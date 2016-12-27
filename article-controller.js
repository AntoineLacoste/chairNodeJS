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
            // localStorage.init();
            localStorage.set($scope.article);
            // var localArray = localStorage.get();
            // for(var i = 0; i < localArray.length; i++){
            //     console.log(localArray[i]);

            // }
        };
    }]);