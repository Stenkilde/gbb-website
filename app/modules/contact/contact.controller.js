(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('Contact', Contact);

	/* @ngInject */
	function Contact($http) {
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
