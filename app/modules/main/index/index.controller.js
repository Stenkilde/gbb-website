(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('Index', Index);

	/* @ngInject */
	function Index($http, $modal) {
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
			$modal.open({
	      		templateUrl: 'modules/shared/modals/signup.modal.html',
		  		controller: 'ModalSignup',
		  		controllerAs: 'somecoolmodal'
		    });
		}

	}

})();
