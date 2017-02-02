'use strict';

var app = angular.module('chairApp', ['homePageModule', 'articlePageModule', 'cartPageModule'])
.run(function($rootScope) {
    $rootScope.apiURL = 'http://localhost:1337/api';
});