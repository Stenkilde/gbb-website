(function() {
	'use strict';

	angular.module('gbb')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Index = {
				name: 'application.clubs',
				url: '/klubber',
				views: {
					'main@application': {
						templateUrl: 'modules/clubs/index/index.template.html',
						controller: 'ClubsIndex',
						controllerAs: 'index'
					}
				}
			};

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

			$stateProvider.state(Index);
			$stateProvider.state(View);
		});
})();
