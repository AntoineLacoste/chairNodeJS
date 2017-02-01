'use strict';

angular.module('chairApp')
.directive('footerBottom', [ function () {
	return {
		templateUrl : 'directives/footer-bottom.html',
		restrict: 'E'
	};
}]);