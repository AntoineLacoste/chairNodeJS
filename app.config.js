'use strict';

angular.module('equipeApp')
    .config(function($routeProvider){
    $routeProvider
        .when('/:section', {
            template: '<news-feed></news-feed>'
        })
        .when('/article/:articleId', {
            template: '<article-page></article-page>'
        })
        .when('/', {
            controller: 'HomeController',
            templateUrl:  'home.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});