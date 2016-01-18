app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('medico', {
			url: '/medico',
			templateUrl: 'app/medico/medico.html',
			data: {
				loginRequired: true,
				roles: ['Medico']
			}
		})
		.state('medico/examen-general', {
			url: '/medico/examen-general',
			templateUrl: 'app/medico/examenGeneral.html',
			controller: 'ExamenGeneralCtrl',
			data: {
				loginRequired: true,
				roles: ['Medico']
			}
		})
		.state('medico/consulta', {
			url: '/medico/consulta',
			templateUrl: 'app/medico/consulta.html',
			data: {
				loginRequired: true,
				roles: ['Medico']
			}
		})
		.state('medico/laboratorio', {
			url: '/medico/laboratorio',
			templateUrl: 'app/medico/laboratorio.html',
			data: {
				loginRequired: true,
				roles: ['Medico']
			}
		})
		.state('medico/gabinete', {
			url: '/medico/gabinete',
			templateUrl: 'app/medico/gabinete.html',
			data: {
				loginRequired: true,
				roles: ['Medico']
			}
		})
		.state('medico/historial', {
			url: '/medico/historial',
			templateUrl: 'app/medico/historialClientes.html',
			data: {
				loginRequired: true,
				roles: ['Medico']
			}
		});
});