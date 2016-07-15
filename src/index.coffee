angular

# --------------------------------------------------
# Modules to import
# --------------------------------------------------

.module "pam", [
  'pam.controllers'
  'pam.services'
  'ionic'
  'LocalStorageModule'
]

# --------------------------------------------------
# Run Ionic
# --------------------------------------------------

.run ($ionicPlatform) ->
  $ionicPlatform.ready ->
    # Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    # for form inputs)
    if window.cordova and window.cordova.plugins and window.cordova.plugins.Keyboard
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar true
      cordova.plugins.Keyboard.disableScroll true
    if window.StatusBar
      # org.apache.cordova.statusbar required
      StatusBar.styleDefault()

# --------------------------------------------------
# Config wildcard for Google Sheet
# --------------------------------------------------

.config ($sceDelegateProvider) ->
  $sceDelegateProvider.resourceUrlWhitelist ['*']

# --------------------------------------------------
# Controller and Services mockup
# --------------------------------------------------

angular.module("pam.controllers", []).controller()
angular.module("pam.services", []).controller()
