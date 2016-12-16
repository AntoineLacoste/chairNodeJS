'use strict';

angular.module('chairApp')
    .controller('ArticleController', ['$scope', 'fakeHttp', '$routeParams', function ($scope, fakeHttp, $routeParams) {
        // Variables globales
        fakeHttp.get('/article/' + $routeParams.reference).then(
            function (response) {
                $scope.article = response.data;
                console.log($scope.article);
            },
            function (error) {
                console.log(error);
            }
        )

    }]);