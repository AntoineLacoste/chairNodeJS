'use strict';

angular.module('chairApp')
.directive('headerTop', [function () {
	return {
		templateUrl : 'header-top.html',
		restrict: 'E'
	};
}]);