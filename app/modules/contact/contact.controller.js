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

		activate();

		function activate() {
			$http.get('partners.json').then(function(response) {
				vm.partners = response.data;
			});
		}

	}

})();
