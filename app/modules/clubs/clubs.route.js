(function() {
	'use strict';

	angular.module('gbb')
		/* @ngInject */
		.config(function ($stateProvider) {

			var View = {
				name: 'application.clubsView',
				url: '/klubber/:clubs',
				views: {
					'main@application': {
						templateUrl : 'modules/clubs/view/view.template.html',
						controller  : 'ClubsView',
						controllerAs: 'view'
					}
				}
			};
			
			$stateProvider.state(View);
		});
})();
