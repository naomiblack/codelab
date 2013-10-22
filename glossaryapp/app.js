angular.module('glossaryApp', ['ngRoute', 'ngResource'])
  .config(['$routeProvider', function ($routeProvider) {
    'use strict';

    $routeProvider.when('/terms', {
      controller: 'TermsListController',
      templateUrl: 'terms/terms.html',
      controllerAs: 'termsList'
    })
    .when('/terms/:id', {
      controller: 'TermDetailController',
      templateUrl: 'terms/detail/term-detail.html',
      controllerAs: 'termDetail'
    })
    .otherwise({
      redirectTo: '/terms'
    });
  }])
  .constant('TERMS_PATH', '/api/terms')
  .constant('COMMENTS_PATH', '/api/terms/:termId/comments')
  .constant('LOCALSTORAGE_PROFILE_KEY', 'glossaryApp.profile');
