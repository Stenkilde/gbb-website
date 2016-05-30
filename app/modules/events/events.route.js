(function() {
	'use strict';

	angular.module('gbb')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.events',
				url: '/matches',
				views: {
					'main@application': {
						templateUrl: 'modules/events/events.template.html',
						controller: 'Events',
						controllerAs: 'events'
					}
				}
			};

			$stateProvider.state(Index);
		});
})();
