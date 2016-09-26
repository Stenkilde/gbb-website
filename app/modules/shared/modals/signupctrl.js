(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('ModalSignup', ModalSignup);

	/* @ngInject */
	function ModalSignup(items, $modalInstance) {
		/*jshint validthis: true */
		var vm 			= this;
        vm.closeModal = closeModal;

		function closeModal() {
			$modalInstance.dismiss('cancel');
		}

	}

})();
