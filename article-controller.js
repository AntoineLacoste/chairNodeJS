'use strict';

angular.module('chairApp')
    .controller('ArticleController', ['$scope', 'fakeHttp', '$routeParams', function ($scope, fakeHttp, $routeParams) {
        // Variables globales
        fakeHttp.get('/chair/' + $routeParams.reference).then(
            function (response) {
                $scope.article = response.data;
            },
            function (error) {
                console.log(error);
            }
        )

    }]);