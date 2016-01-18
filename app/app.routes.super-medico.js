app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('super-medico', {
			url: '/super-medico',
			templateUrl: 'app/super-medico/super-medico.html',
			controller: 'SuperMedicoCtrl',
			data: {
				loginRequired: true,
				roles: ['Super_medico']
			}
		})
		.state('super-medico/resultados', {
			url: '/super-medico/resultados',
			templateUrl: 'app/super-medico/resultados.html',
			controller: 'SuperMedicoCtrl',
			data: {
				loginRequired: true,
				roles: ['Super_medico']
			}
		})
		.state('super-medico/agenda', {
			url: '/super-medico/agenda',
			templateUrl: 'app/super-medico/agenda/agenda.html',
			controller: 'AgendaCtlr',
			data: {
				loginRequired: true,
				roles: ['Super_medico']
			}
		});
});