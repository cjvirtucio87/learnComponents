var app = angular.module('app', []);


app.controller('ParentCtrl', function () {
  var vm = this;

  vm.arr = [1,2,3,4,5];
});

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
