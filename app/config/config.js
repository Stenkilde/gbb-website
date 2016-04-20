var app = angular.module('gbb', ['ui.router', 'ngLodash', 'slick']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});
