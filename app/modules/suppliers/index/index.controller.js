(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('IndexSup', IndexSup);

	/* @ngInject */
	function IndexSup($http) {
		/*jshint validthis: true */
		var vm 		= this;
		vm.suppliers = [];

		activate();

		function activate() {
			$http.get('suppliers.json').then(function(response) {
				vm.suppliers = response.data;
			});
		}

	}

})();
