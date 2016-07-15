# --------------------------------------------------
# State Manager
# --------------------------------------------------

angular
.module("pam")
.config ($stateProvider, $urlRouterProvider) ->
  # Ionic uses AngularUI Router which uses the concept of states
  # Learn more here: https://github.com/angular-ui/ui-router
  # Set up the various states which the app can be in.
  # Each state's controller can be found in controllers.js
  $stateProvider

  .state 'home',
    url: '/home'
    templateUrl: 'templates/home.html'
    controller: 'HomeCtrl'

  .state 'meeting',
    url: '/meeting'
    templateUrl: 'templates/meeting.html'
    controller: 'MeetingCtrl'

  .state 'meeting-thanks',
    url: '/meeting-thanks'
    templateUrl: 'templates/meeting-thanks.html'
    controller: 'MeetingThanksCtrl'

  .state 'delivery',
    url: '/delivery'
    templateUrl: 'templates/delivery.html'
    controller: 'DeliveryCtrl'

  .state 'delivery-small',
    url: '/delivery-small'
    templateUrl: 'templates/delivery-small.html'
    controller: 'DeliverySmallCtrl'

  .state 'delivery-large',
    url: '/delivery-large'
    templateUrl: 'templates/delivery-large.html'
    controller: 'DeliveryLargeCtrl'

  .state 'pickup',
    url: '/pickup'
    templateUrl: 'templates/pickup.html'
    controller: 'PickupCtrl'

  .state 'general',
    url: '/general'
    templateUrl: 'templates/general.html'
    controller: 'GeneralCtrl'

  # if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise '/home'
