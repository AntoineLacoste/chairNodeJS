'use strict';

angular.module('chairApp')
.controller('CartController', ['$scope', 'localStorage', function ($scope, localStorage) {
    $scope.cart = localStorage.get('cart');
}]);