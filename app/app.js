var app = angular.module('app', ['ngRoute']);
app.run(function($rootScope, $window) {
  $rootScope.$on('$routeChangeSuccess', function () {
    $('#myNavbar').attr("class", "collapse");
    var interval = setInterval(function(){
      if (document.readyState == 'complete') {
        $('div.hidden').fadeIn(400).removeClass('hidden');
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
    .when('/renovering-kok', {
      controller: 'navController',
      templateUrl: 'app/partials/band/renovering-kok.html'
    })
    .when('/renovering-badrum', {
      controller: 'navController',
      templateUrl: 'app/partials/band/renovering-badrum.html'
    })
    .when('/renovering-snickeri', {
      controller: 'navController',
      templateUrl: 'app/partials/band/renovering-snickeri.html'
    })
    .when('/renovering-total', {
      controller: 'navController',
      templateUrl: 'app/partials/band/renovering-total.html'
    })
    .when('/om-oss', {
      controller: 'navController',
      templateUrl: 'app/partials/about/about.html'
    })
    .when('/gallery-live', {
      controller: 'navController',
      templateUrl: 'app/partials/gallery/gallery-live.html'
    })
    .when('/gallery-promo', {
      controller: 'navController',
      templateUrl: 'app/partials/gallery/gallery-promo.html'
    })
    // .when('/referens-vvs', {
    //   controller: 'navController',
    //   templateUrl: 'app/partials/gallery/gallery-vvs.html'
    // })
    // .when('/referens-snickeri', {
    //   controller: 'navController',
    //   templateUrl: 'app/partials/gallery/gallery-snickeri.html'
    // })
    .when('/contact', {
      controller: 'navController',
      templateUrl: 'app/partials/contact/contact.html'
    })
    .when('/kontakt', {
      controller: 'navController',
      templateUrl: 'app/partials/contact/contact.html'
    })
    .otherwise({ redirectTo: '/' });
}]);
// var controllers = {};
// controllers.searchController = function($scope) {
//   $scope.books = [
//     { name: 'J.R.R. Tolkien', title: 'The Hobbit', img: 'img/books/hobbit.jpg'},
//     { name: 'Harper Lee', title: 'To Kill A Mockingbird', img: 'img/books/mockingbird.jpg'},
//     { name: 'Scott Fitzgerald', title: 'The Great Gatsby', img: 'img/books/gatsby.jpg'},
//     { name: 'Joseph Heller', title: 'Catch-22', img: 'img/books/22.jpg'},
//     { name: 'Anthony Burgess', title: 'A Clockwork Orange', img: 'img/books/clockwork.jpg'},
//     { name: 'Dr. Seuss', title: 'The Cat in the Hat', img: 'img/books/cat.png'},
//     { name: 'Chris Mould', title: 'Something Wickedly Weird', img: 'img/books/wicked.jpg'},
//     { name: 'George R.R. Martin', title: 'A Game of Thrones', img: 'img/books/thrones.jpg'},
//     { name: 'J.D. Salinger', title: 'The Catcher in the Rye', img: 'img/books/rye.jpg' }
//   ];
// };
//
// app.controller(controllers);
