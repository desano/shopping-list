var shoppingListControllers = angular.module('shoppingListControllers', []);

shoppingListControllers.controller('ShoppingListsCtrl', ['$scope', '$rootScope',
function ($scope, $rootScope) {
  $scope.lists = $rootScope.lists;
  $scope.products = [];

  $scope.addItem = function() {
    $scope.products.push($scope.productEntry);
    $scope.productEntry = '';
  }

  $scope.addList = function() {
    $rootScope.lists.push({name: $scope.listName, products: $scope.products});
  }
}]);

shoppingListControllers.controller('ListDetailsCtrl', ['$scope', '$routeParams', '$rootScope',
function($scope, $routeParams, $rootScope) {
  $scope.lists = $rootScope.lists;
  $scope.listId = $routeParams.listId;
}]);
