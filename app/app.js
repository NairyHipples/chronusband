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
      controller: 'navController',
      templateUrl: 'app/partials/home/home.html'
    })
    .when('/store', {
      controller: 'navController',
      templateUrl: 'app/partials/store/store.html'
    })
    .when('/band', {
      controller: 'navController',
      templateUrl: 'app/partials/band/band.html'
    })
    .when('/gallery-live', {
      controller: 'navController',
      templateUrl: 'app/partials/gallery/gallery-live.html'
    })
    .when('/gallery-promo', {
      controller: 'navController',
      templateUrl: 'app/partials/gallery/gallery-promo.html'
    })
    .when('/contact', {
      controller: 'navController',
      templateUrl: 'app/partials/contact/contact.html'
    })
    .otherwise({ redirectTo: '/' });
}]);
