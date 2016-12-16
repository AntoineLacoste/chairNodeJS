'use strict';

angular.module('chairApp')
    .config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl:  'home.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});