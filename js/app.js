var app = angular.module('app', []);


// I. MASTER AND SIBLINGS.
// This is to illustrate the interaction between a parent controller
// (which would be attached to a route) and directives used in an ng-repeat.

// MasterCtrl is for the whole app.
app.controller('MasterCtrl', function () {
  var vm = this;

  vm.arr = [1,2,3,4,5];

  vm.hideMe = false;

  vm.toggleHide = function () {
    vm.hideMe = !vm.hideMe;
  };
});

// SiblingCtrl is for each child directive.
app.controller('SiblingCtrl', [function() {
  var vm = this;

  vm.log = function (id) {
    console.log("From the sibling ctrl" + "#" + id);
  };

  // The controller is a constructor. Every time you initiate one for a directive in a repeater,
  // that directive gets its own controller.
  vm.state = 1;
  vm.changeState = function () {
    vm.state = 3;
  };
  vm.showState = function () {
    console.log(vm.state);
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

// II. PARENT AND CHILD DIRECTIVES.
