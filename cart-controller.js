'use strict';

angular.module('chairApp')
.controller('CartController', ['$scope', 'localStorage', function ($scope, localStorage) {
    localStorage.set('test');
    $scope.cart = localStorage.get('cart');
}]);