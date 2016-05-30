(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('Topbar', Topbar);

	/* @ngInject */
	function Topbar($http, $modal) {
		/*jshint validthis: true */
		var vm 			= this;
		vm.clubs		= [];
		vm.menuState	= false;
		vm.acState		= false;
		vm.openModal	= openModal;

		activate();

		function activate() {
			$http.get('clubs.json').then(function(response) {
				vm.clubs = response.data;
			});
		}

		function openModal() {
			$modal.open({
		      templateUrl: 'modules/shared/modals/gallery.modal.html',
			  controller: 'ModalCtrl',
			  controllerAs: 'modal',
			  windowClass: 'collapsed',
			  resolve: {
                    items: function() {
						return [];
                    }
                }
		    });
		}

	}

})();
