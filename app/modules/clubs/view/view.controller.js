(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('ClubsView', ClubsView);

	/* @ngInject */
	function ClubsView($http, $stateParams, lodash) {
		/*jshint validthis: true */
		var vm 		= this;
		vm.clubs;
		vm.currentItem;

		activate();

		function activate() {
			$http.get('clubs.json').then(function(response) {
				vm.clubs = response.data;
				vm.currentItem = (lodash.filter(response.data, {url: $stateParams.clubs})).shift();
			})
		}

	}

})();
