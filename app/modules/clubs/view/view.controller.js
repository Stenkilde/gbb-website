(function () {
	'use strict';

	angular
		.module('gbb')
		.controller('ClubsView', ClubsView);

	/* @ngInject */
	function ClubsView($http, $stateParams, $modal, lodash) {
		/*jshint validthis: true */
		var vm 		= this;
		vm.clubs;
		vm.currentItem;
		vm.openModal = openModal;

		activate();

		function activate() {
			$http.get('clubs.json').then(function(response) {
				vm.clubs = response.data;
				vm.currentItem = (lodash.filter(response.data, {url: $stateParams.clubs})).shift();
			})
		}

		function openModal(obj) {
			$modal.open({
		      templateUrl: 'modules/shared/modals/myModalContent.html',
			  controller: 'ModalCtrl',
			  controllerAs: 'modal',
			  resolve: {
                    items: function() {
						return obj;
                    }
                }
		    });
		}

	}

})();
