var app = angular.module('gbb', ['ui.router', 'ngSanitize', 'mm.foundation', 'ngLodash', 'slick']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});
