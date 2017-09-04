var app = angular.module('app', ['ngRoute']);
app.run(function($rootScope, $window) {
  $rootScope.$on('$routeChangeSuccess', function () {
    $('#myNavbar').attr("class", "collapse");
    var interval = setInterval(function(){
      if (document.readyState == 'complete') {
        $('div.hidden').fadeIn(600).removeClass('hidden');
        $window.scrollTo(0, 0);
        clearInterval(interval);
      }
    }, 20);
  });
});
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '/app/partials/home/home.html',
      controller: 'navController'
    })
    .when('/store', {
      templateUrl: '/app/partials/store/store.html',
      controller: 'navController'      
    })
    .when('/band', {
      templateUrl: '/app/partials/band/band.html',
      controller: 'navController'      
    })
    .when('/gallery-live', {
      templateUrl: '/app/partials/gallery/gallery-live.html',
      controller: 'navController'
    })
    .when('/gallery-promo', {
      templateUrl: '/app/partials/gallery/gallery-promo.html',
      controller: 'navController'
    })
    .when('/contact', {
      templateUrl: '/app/partials/contact/contact.html',
      controller: 'navController'
    })
    .otherwise({ redirectTo: '/' });
}]);
