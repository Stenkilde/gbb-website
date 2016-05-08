(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('ViewSup', ViewSup);

	/* @ngInject */
	function ViewSup($http, $stateParams, lodash) {
		/*jshint validthis: true */
		var vm 		= this;
		vm.suppliers;
		vm.currentItem;

		activate();

		function activate() {
            $http.get('suppliers.json').then(function(response) {
				vm.suppliers = response.data;
				vm.currentItem = (lodash.filter(response.data, {id: parseInt($stateParams.id)})).shift();
            })
		}

	}

})();
