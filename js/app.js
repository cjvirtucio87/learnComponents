var app = angular.module('app', []);

// MasterCtrl is for the whole app.
app.controller('MasterCtrl', function () {
  var vm = this;

  vm.arr = [1,2,3,4,5];

  vm.hideMe = false;

  vm.toggleHide = function () {
    console.log('this is firing');
    vm.hideMe = !vm.hideMe;
  };
});

// SiblingCtrl is for each child directive.
app.controller('SiblingCtrl', [function() {
  var vm = this;

  vm.log = function (id) {
    console.log("From the sibling ctrl" + "#" + id);
  };
}]);

app.directive('sibling', function () {
  return {
    controller: 'SiblingCtrl',
    controllerAs: 'vm',
    restrict: 'E',
    scope: {
      sibId: '<'
    },
    templateUrl: 'templates/sibling.html'
  };
});
