'use strict';

angular.module('chairApp')
.directive('footerBottom', [ function () {
	return {
		templateUrl : 'footer-bottom.html',
		restrict: 'E'
	};
}]);