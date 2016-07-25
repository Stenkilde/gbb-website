(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('Index', Index);

	/* @ngInject */
	function Index($http) {
		/*jshint validthis: true */
		var vm 		= this;
		vm.partners = [];
		vm.openModal = openModal;

		activate();

		function activate() {
			$http.get('partners.json').then(function(response) {
				vm.partners = response.data;
			});
		}

		function openModal() {

		}

	}

})();
