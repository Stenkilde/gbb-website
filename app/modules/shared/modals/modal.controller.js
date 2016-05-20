(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('ModalCtrl', ModalCtrl);

	/* @ngInject */
	function ModalCtrl(items) {
		/*jshint validthis: true */
		var vm 			= this;
        vm.item = items;
		
	}

})();
