app.controller('AgendaCtlr', function ($scope, $http) {
	$scope.$parent.loading = 'indeterminate';
	$scope.solicitudes = [];
	$scope.proveedores = ['Médica Eliseo', 'Centro Integral de Lesiones y Accidentes S.A. de C.V.', 'Grupo CECSS'];

	$http.get('Solicitud/index', {})
	.then(function(response) {
		$scope.solicitudes = response.data;
	})
	.finally(function() {
	 	$scope.$parent.loading = null;
 	});

	// Hacer el get de proveedores
 	// $http.get('', {})
 	// .then(function(response) {

 	// })
 	// .finally(function() {

 	// })

	// $scope.create = function() {
	// 	$http.post('Solicitud/create', {})
	// 	.then(function(response) {
	// 		console.log(response);
	// 	})
	// 	.finally(function() {

	// 	});
	// }
});
