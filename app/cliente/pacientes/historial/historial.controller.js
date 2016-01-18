app.controller('HistorialCtlr', function($scope, $http, $mdDialog) {
	$scope.events = {
		badgeClass: 'info',
		badgeIcon: 'person',
		title: 'Demo post',
		when: '08/12/2015',
		content: 'Some awesome content'
	};
	$scope.pacientes = [{
		name: 'Evan Juárez'
	},
	{
		name: 'Javier Meza'
	},
	{
		name: 'Erick Sama'
	},
	{
		name: 'Jauregui Sama'
	},
	{
		name: 'Julio Sempai'
	}];

	$scope.getNumber = function(num) {
		newArray = [];
		for (var i = 0; i < num; i++) {
			newArray.push($scope.events);
		}
		return newArray;
	};
	$scope.muestraEvento = function(ev) {
    $mdDialog.show({
      controller: DialogCtlr,
      templateUrl: 'Cliente/detalleEvento',
      parent: angular.element(document.body),
      targetEvent: ev,
      preserveScope: true,
      clickOutsideToClose:true
    });
  };
});
