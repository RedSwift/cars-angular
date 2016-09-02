angular.module('carApp')
  .component('getCar', {
    templateUrl: '/features/main/get-car.template.html',
    controller: function ($http, $window) {
      var ctrl = this
      $http({
        method: 'GET',
        url: '/api/car'
      }).then(function (res) {
        ctrl.cars = res.data
      }, function (err) {
        console.log(err)
      })

      this.updateCar = function (id) {
        $window.location.href = '/#/car/' + id
      }

      this.deleteCar = function (id) {
        $http({
          method: 'DELETE',
          url: '/api/car/' + id
        }).then(function () {
          $window.location.reload()
        }, function (err) {
          alert('Error: ' + err)
        })
      }
    }
  })
