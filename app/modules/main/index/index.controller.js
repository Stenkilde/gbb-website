(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('Index', Index);

	/* @ngInject */
	function Index() {
		/*jshint validthis: true */
		var vm 		= this;
		vm.partners = [];
		vm.clubs	= [];

		activate();

		function activate() {
			$http.get('partners.json').then(function(response) {
				vm.partners = response.data;
			});
			$http.get('clubs.json').then(function(response) {
				vm.clubs = response.data;
			});
		}

	}

})();
