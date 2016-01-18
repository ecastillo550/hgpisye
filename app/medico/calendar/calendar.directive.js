app.directive('calendar', function() {
	return {
		restrict: 'E',
		template: '<div id="calendar"></div>',
		scope: {
			sols: '=solicitudes'
		}, 
		controller: function($mdDialog, $scope, $http, $mdToast) {
			$scope.$mdDialog = $mdDialog;
			$scope.$mdToast = $mdToast;
			$scope.view = '';

			$scope.loadView = function(id) {
				id = typeof a !== 'undefined' ? a : -1;

				$http.get('Solicitud/solicitudIndividual', {id: id})
				.then(function(response) {
					$scope.view = response.data;
				})
				.finally(function() {

				});
			}

			$scope.loadEvents = function() {
				stringJSON = JSON.stringify($scope.sols);
			  stringJSON = stringJSON.replace(/solID/g, "id");
			  stringJSON = stringJSON.replace(/cnombre/g, "title");
			  stringJSON = stringJSON.replace(/null/g, '""');
			  solicitudes = JSON.parse(stringJSON);
			  return solicitudes;
			}
		},
		link: function (scope, element, attrs) {
				scope.$watch('views', function() {
					$(element).weekCalendar({
						height: function($calendar){
										return $(window).height() - $(".md-toolbar-tools").outerHeight() - $(".md-inline-form").outerHeight() - 50;
									},
						data: function(start, end, callback) {
							scope.$watch('sols', function() {
								callback(scope.loadEvents());
							})
						},
						eventClick: function(ev) {
							loadView();
							scope.$mdDialog.show({
								template: scope.view,
								controller: 'SolicitudCtlr',
								parent: angular.element(document.body),
								clickOutsideToClose: true,
								targetEvent: ev
							})
							.then(function(answer) {

							}, function() {
								$(element).weekCalendar('removeUnsavedEvents'); 
							});
						},
						eventNew: function(ev) {
							scope.$mdDialog.show({
								template: scope.view,
								controller: 'SolicitudCtlr',
								parent: angular.element(document.body),
								clickOutsideToClose: true,
								targetEvent: ev
							})
							.then(function() {
								// $(element).weekCalendar('refresh');
							}, function() {
								$(element).weekCalendar('removeUnsavedEvents'); 
							})
						},
						draggable: function(ev) {
							return false;
						},
						resizable: function(ev) {
							return false;
						}
					});
				}, true);
		}
	};
});