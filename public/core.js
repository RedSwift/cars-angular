angular.module('carApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      template: '<home></home>'
    })
  })
