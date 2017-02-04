'use strict';

angular.module('articlePageModule', ['ngRoute'])
.component('articlePage', {
    templateUrl: 'article-page/article.html',
    controller: 'ArticleController'
});

angular.module('articlePageModule')
.controller('ArticleController', ['$scope', '$http', '$routeParams', 'localStorage', '$rootScope', function ($scope, $http, $routeParams, localStorage, $rootScope) {


    // Get chairs from the server
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