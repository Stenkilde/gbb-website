(function() {
	'use strict';

	angular.module('gbb')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.contact',
				url: '/contact',
				views: {
					'main@application': {
						templateUrl: 'modules/contact/contact.template.html',
						controller: 'Contact',
						controllerAs: 'contact'
					}
				}
			};

			$stateProvider.state(Index);
		});
})();
