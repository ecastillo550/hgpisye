app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('cliente', {
			url: '/cliente',
			templateUrl: 'app/cliente/cliente.html',
			controller: 'ClienteMainCtlr',
			data: {
				loginRequired: true,
				roles: ['Cliente']
			}
		})
		.state('cliente/pacientes', {
			url: '/cliente/pacientes',
			templateUrl: 'app/cliente/pacientes/pacientes.html',
			controller: 'PacientesCtlr',
			data: {
				loginRequired: true,
				roles: ['Cliente']
			}
		})
		.state('cliente/solicitudes', {
			url: '/cliente/solicitudes',
			templateUrl: 'app/cliente/solicitudes/solicitud-grupal.html',
			controller: 'SolicitudCtlr',
			data: {
				loginRequired: true,
				roles: ['Cliente']
			}
		});
});