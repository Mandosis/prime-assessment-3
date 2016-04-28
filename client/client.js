var app = angular.module('heroApp', []);

app.controller('MainController', ['$http', function($http) {
  var vm = this;
  vm.heroList = [];
  vm.powerList = ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity'];

  vm.get = function() {
    $http.get('/heroes/').then(function(response) {
      console.log(response);
      vm.heroList = response.data;
    })
  }
  vm.add = function() {
    var newHero = {
      alias: vm.aliasInput,
      first_name: vm.firstNameInput,
      last_name: vm.lastNameInput,
      city: vm.cityInput,
      power_name: vm.powerInput
    }

    $http.post('/heroes/', newHero).then(vm.get());
  }

  vm.delete = function(id) {
    $http.delete('/heroes/' + id).then(vm.get());
  }

  vm.get();
}]);
