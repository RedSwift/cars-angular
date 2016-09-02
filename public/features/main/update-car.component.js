angular.module('carApp')
  .component('updateCar', {
    templateUrl: '/features/main/update-car.template.html',
    controller: function ($http, $routeParams, $window) {
      var ctrl = this
      $http({
        method: 'GET',
        url: '/api/car/' + $routeParams.id
      }).then(function (res) {
        ctrl.brand = res.data.brand
        ctrl.model = res.data.model
        ctrl.year = res.data.year
      })

      this.back = function () {
        $window.location.href = '/#/'
      }

      this.updateCar = function () {
        $http({
          method: 'PUT',
          url: '/api/car/' + $routeParams.id,
          data: {
            brand: ctrl.brand,
            model: ctrl.model,
            year: ctrl.year
          }
        }).then(function () {
          $window.location.href = '/#/'
        }, function (err) {
          alert('Error: ' + err)
        })
      }
    }
  })
