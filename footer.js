'use strict';

//directive for the footer of the page
angular.module('chairApp')
.directive('footerBottom', [ function () {
	return {
		templateUrl : 'footer-bottom.html',
		restrict: 'E'
	};
}]);