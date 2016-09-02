angular.module('carApp')
  .component('display', {
    templateUrl: '/features/main/display.template.html',
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
