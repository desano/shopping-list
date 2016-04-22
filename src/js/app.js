var shoppingListApp = angular.module('shoppingListApp', [
  'ngRoute',
  'shoppingListControllers'
]);

shoppingListApp.run(function($rootScope) {
    $rootScope.lists = [
      {
        name: 'Today shopping',
        products: ['milk', 'butter', 'bread']
      },
      {
        name: 'Trip shoping',
        products: ['tent', 'water', 'light']
      },
      {
        name: 'Weekend shopping',
        products: ['cola', 'water', 'chips']
      },
    ]
})

shoppingListApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/lists', {
        templateUrl: 'templates/shopping-lists.html',
        controller: 'ShoppingListsCtrl'
      }).
      when('/lists/:listId', {
        templateUrl: 'templates/list-details.html',
        controller: 'ListDetailsCtrl'
      }).
      otherwise({
        redirectTo: '/lists'
      });
  }]);
