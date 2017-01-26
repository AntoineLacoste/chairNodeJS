'use strict';

var app = angular.module('chairApp', ['ngRoute', 'ui.bootstrap'])
.run(function($rootScope) {
    $rootScope.apiURL = 'http://localhost:1337/api';
})