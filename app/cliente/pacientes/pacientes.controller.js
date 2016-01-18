app.controller('PacientesCtlr', function($scope) {

	$scope.query = {
		filter: '',
		order: 'nombre',
		limit: 5,
		page: 1
	};

  $scope.toOrder = function(order) {
    $scope.order = order;
  };

  $scope.evalResultStyle = function(result) {
    switch(result) {
    case 'Negativo':
      return {'color': 'green'}
    case 'Positivo':
      return {'color': 'red'}
    }
  }

	$scope.pacientes = [
		{
			nombre: 'Juan',
			ap: 'Pérez',
			am: 'Garza',
			img:'',
			puesto: 'Coordinador general',
			examen: 'Antidopping',
			resultado: 'Negativo'
		},
		{
			nombre: 'Pedro',
			ap: 'Garza',
			am: 'García',
			img:'',
			puesto: 'Recursos humanos',
			examen: 'Antidopping',
			resultado: 'Negativo'
		},
		{
			nombre: 'Pedro',
			ap: 'Garza',
			am: 'García',
			img:'',
			puesto: 'Recursos humanos',
			examen: 'Antidopping',
			resultado: 'Negativo'
		},
		{
			nombre: 'John',
			ap: 'Smith',
			am: 'Johnson',
			img:'',
			puesto: 'Coordinador general',
			examen: 'Antidopping',
			resultado: 'Positivo'
		}
	];
});
