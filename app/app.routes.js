app.factory('authorization', ['$rootScope', '$state', 'hagane', '$location',
  function($rootScope, $state, hagane, $location) {
    return {
      authorize: function() {
        return hagane.session.identity()
          .then(function() {
            var isAuthenticated = hagane.session.authorize();

            //if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0 && !hagane.isInAnyRole($rootScope.toState.data.roles)) {
              if (isAuthenticated) {
              	$location.path('admin');
              } // user is signed in but not authorized for desired state
              else {
                // user is not authenticated. stow the state they wanted before you
                // send them to the signin state, so you can return them when you're done
                $rootScope.returnToState = $rootScope.toState;
                $rootScope.returnToStateParams = $rootScope.toStateParams;

                // now, send them to the signin state so they can log in
                $location.path('login');
              }
            //}
          }
        );
      }
    };
  }
]);
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('login');
	$stateProvider
		.state('site', {
			'abstract': true,
			resolve: {
				authorize: ['authorization', function(authorization) {
					return authorization.authorize();
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
			// data: {
			// 	roles: ['administrador']
			// },
			controller: 'AdminMainCtlr'
		});
});