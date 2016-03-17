angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/templates', {
			templateUrl: 'templates/templates.html',
			controller: 'TemplatesCTRL'
		});


}])

.controller('TemplatesCTRL',[ '$scope', function($scope){
	console.log($scope);
}]);