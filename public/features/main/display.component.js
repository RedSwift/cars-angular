angular.module('carApp')
  .component('display', {
    templateUrl: '/features/main/display.template.html',
    controller: function ($http) {
      var ctrl = this
      $http({
        method: 'GET',
        url: '/api/car'
      }).then(function (res) {
        ctrl.cars = res.data
      }, function (err) {
        console.log(err)
      })
    }
  })
