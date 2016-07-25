(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('IndexPartners', IndexPartners);

	/* @ngInject */
	function IndexPartners($http) {
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
