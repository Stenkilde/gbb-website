(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('View', View);

	/* @ngInject */
	function View($http, $stateParams, lodash) {
		/*jshint validthis: true */
		var vm 		= this;
		vm.partners;
		vm.currentItem;

		activate();

		function activate() {
            $http.get('partners.json').then(function(response) {
				vm.partners = response.data;
				vm.currentItem = (lodash.filter(response.data, {id: parseInt($stateParams.id)})).shift();
				console.log(vm.currentItem);
            })
		}

	}

})();
