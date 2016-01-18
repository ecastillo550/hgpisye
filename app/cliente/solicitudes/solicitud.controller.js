app.controller('SolicitudCtlr', function($scope,$timeout, $mdSidenav, $log, $http, $mdDialog, $mdToast, $filter) {

  $scope.pacientes = [{id: 'paciente1'}];
  $scope.$parent.loading = null;
  $scope.formData = {};
  $scope.$parent.toolbar_title = 'Solicitud de citas';

  $scope.addNewChoice = function() {
    var newItemNo = $scope.pacientes.length+1;
    $scope.pacientes.push({'id':'paciente'+newItemNo});
  };

  $scope.removeChoice = function() {
    var lastItem = $scope.pacientes.length-1;
    $scope.pacientes.splice(lastItem);
  };

  //$scope.$parent.loading = 'indeterminate';
  $scope.pacientes = [{id: 0}];
  $scope.pacienteForm = null;

  $scope.modPacienteDialog = function(ev, index) {
    $scope.pacienteForm = $scope.pacientes[index];
    $mdDialog.show({
      controller: DialogCtlr,
      templateUrl: 'Templates/modificarPaciente.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:false,
      scope: $scope,
      preserveScope: true
    })
    .then(function(resp) { //se guarda el cambio
      if (resp) {
        $http.post('Admin/ajaxUpdatePaciente', $scope.pacienteForm)
        .then(function(response) {
          $mdToast.show(
            $mdToast.simple()
            .position('right')
            .content('Guardado Paciente')
            .parent(document.querySelector( '#pagecontent' ))
            .hideDelay(3000)
          );
        });
      }
    });
  };

  $scope.hide = function() {
  	$mdDialog.hide();
  };

  $scope.submitIndividual = function() {
  	$scope.formData = {
	  	nombre: $scope.pacienteForm.nombre,
	  	apellido_paterno: $scope.pacienteForm.apellido_paterno,
	  	apellido_materno: $scope.pacienteForm.apellido_materno,
	  	fecha: $filter('date')($scope.pacienteForm.fecha, 'yyyy-MM-dd'),
	  	hora: $filter('date')($scope.pacienteForm.hora, 'HH:mm:ss'),
	  	estudios: [1, 2],
	  	observaciones: $scope.cliente.observaciones || ''
  	};
  	console.log($scope.formData);

  	$http.post('Solicitud/solicitudIndividual', $scope.formData).success(function() {
  		$scope.hide();
  	});
  };
});
