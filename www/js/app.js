angular.module("pam", ['pam.controllers', 'pam.services', 'ionic', 'LocalStorageModule']).run(function($ionicPlatform) {
  return $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      return StatusBar.styleDefault();
    }
  });
}).config(function($sceDelegateProvider) {
  return $sceDelegateProvider.resourceUrlWhitelist(['*']);
});

angular.module("pam.controllers", []).controller();

angular.module("pam.services", []).controller();

angular.module("pam").config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  }).state('meeting', {
    url: '/meeting',
    templateUrl: 'templates/meeting.html',
    controller: 'MeetingCtrl'
  }).state('meeting-thanks', {
    url: '/meeting-thanks',
    templateUrl: 'templates/meeting-thanks.html',
    controller: 'MeetingThanksCtrl'
  }).state('delivery', {
    url: '/delivery',
    templateUrl: 'templates/delivery.html',
    controller: 'DeliveryCtrl'
  }).state('delivery-small', {
    url: '/delivery-small',
    templateUrl: 'templates/delivery-small.html',
    controller: 'DeliverySmallCtrl'
  }).state('delivery-large', {
    url: '/delivery-large',
    templateUrl: 'templates/delivery-large.html',
    controller: 'DeliveryLargeCtrl'
  }).state('pickup', {
    url: '/pickup',
    templateUrl: 'templates/pickup.html',
    controller: 'PickupCtrl'
  }).state('general', {
    url: '/general',
    templateUrl: 'templates/general.html',
    controller: 'GeneralCtrl'
  });
  return $urlRouterProvider.otherwise('/home');
});
