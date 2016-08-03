(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('ModalSignup', ModalSignup);

	/* @ngInject */
	function ModalSignup() {
		/*jshint validthis: true */
		var vm 			= this;
		vm.signup 		= signup;

		function signup(name, email) {
			console.log(name, email);
		}
	}

})();
