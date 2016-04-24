(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('ClubsIndex', ClubsIndex);

	/* @ngInject */
	function ClubsIndex($http, $stateParams, lodash) {
		/*jshint validthis: true */
		var vm 		= this;

		activate();

		function activate() {
		}

	}

})();
