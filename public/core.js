angular.module('carApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      template: '<home></home>'
    })
    .when('/car/:id', {
      template: '<update-car></update-car>'
    })
  })
