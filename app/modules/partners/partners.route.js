(function() {
	'use strict';

	angular.module('gbb')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.partners',
				url: '/partners',
				views: {
					'main@application': {
						templateUrl: 'modules/partners/index/index.template.html',
						controller: 'Index',
						controllerAs: 'index'
					}
				}
			};

			var View = {
				name: 'application.partnerview',
				url: '/partner/:id',
				views: {
					'main@application': {
						templateUrl : 'modules/partners/view/view.template.html',
						controller  : 'View',
						controllerAs: 'view'
					}
				}
			};

			$stateProvider.state(Index);
			$stateProvider.state(View);
		});
})();
