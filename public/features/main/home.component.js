var carApp = angular.module('carApp')

carApp.component('home', {
  templateUrl: '/features/main/home.template.html',
  controller: function ($http) {
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
        console.log(res)
      }, function (err) {
        console.log(err)
      })
    }
  }
})
