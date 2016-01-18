app.controller('ClienteMainCtlr', function($scope, $http) {
  var totalServicesData = new HgChartData();
  totalServicesData.addSeries("Servicios", [
    {x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 3},
    {x: 4, y: 4},
    {x: 5, y: 5},
    {x: 6, y: 6}
  ]);

  var generalAptitudeData = new HgChartData();
  generalAptitudeData.addSeries("Aptitud laboral", [
    {key: "Apto", cant: 6},
    {key: "Apto con reservas", cant: 3},
    {key: "No apto temporal", cant: 2},
    {key: "No apto", cant: 2}
  ]);


  $scope.totalServicesChart = new HgLineChart("Servicios", null, null, totalServicesData);
  $scope.generalAptitudeChart = new HgPieChart("Aptitud laboral", null, null, generalAptitudeData);

  console.log($scope.totalServicesChart);
});
