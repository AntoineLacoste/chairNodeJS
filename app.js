'use strict';

var app = angular.module('chairApp', ['ngRoute', 'articlePageModule', 'homePageModule', 'cartPageModule'])
.run(function($rootScope) {
    $rootScope.apiURL = 'http://localhost:1337/api';
})