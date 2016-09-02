var carApp = angular.module('carApp')

carApp.component('home', {
  templateUrl: '/features/main/home.template.html',
  controller: function ($http, $window) {
    this.newCar = function () {
      $http({
        method: 'POST',
        url: '/api/car',
        data: {
          brand: this.brand,
          model: this.model,
          year: this.year
        }
      }).then(function (res) {
        $window.location.reload()
      }, function (err) {
        alert('Error: ' + err)
      })
    }
  }
})
