(function() {
	'use strict';

	angular.module('gbb')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.suppliers',
				url: '/suppliers',
				views: {
					'main@application': {
						templateUrl: 'modules/suppliers/index/index.template.html',
						controller: 'IndexSup',
						controllerAs: 'supIndex'
					}
				}
			};

			var View = {
				name: 'application.supplierview',
				url: '/supplier/:id',
				views: {
					'main@application': {
						templateUrl : 'modules/suppliers/view/view.template.html',
						controller  : 'ViewSup',
						controllerAs: 'view'
					}
				}
			};

			$stateProvider.state(Index);
			$stateProvider.state(View);
		});
})();
