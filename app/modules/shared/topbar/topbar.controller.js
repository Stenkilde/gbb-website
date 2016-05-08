(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('Topbar', Topbar);

	/* @ngInject */
	function Topbar($http) {
		/*jshint validthis: true */
		var vm 			= this;
		vm.clubs		= [];

		activate();

		function activate() {
			$http.get('clubs.json').then(function(response) {
				vm.clubs = response.data;
			});
		}

	}

})();
