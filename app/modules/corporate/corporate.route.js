(function() {
	'use strict';

	angular.module('gbb')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.corporate',
				url: '/corporate',
				views: {
					'main@application': {
						templateUrl: 'modules/corporate/corporate.template.html',
						controller: 'Corp',
						controllerAs: 'corp'
					}
				}
			};

			$stateProvider.state(Index);
		});
})();
