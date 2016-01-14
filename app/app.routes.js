app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
	$stateProvider
		.state('site', {
			'abstract': true,
			resolve: {
				authorize: ['hagane', function(hagane) {
					return hagane.session.authorize();
				}]
			}
		})
		.state('login', {
			url: '/login',
			templateUrl: 'app/auth/login.html',
			controller: 'AuthCtlr'
		})
		.state('admin', {
			url: '/admin',
			parent: 'site',
			templateUrl: 'app/admin/admin.html',
			data: {
				roles: ['administrador']
			},
			controller: 'AdminMainCtlr'
		});
});