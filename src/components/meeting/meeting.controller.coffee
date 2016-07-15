angular
.module "pam.controllers"
.controller "MeetingCtrl", ($scope, $http, localStorageService) ->

  #  get slack data
  $http {
    method: "GET"
    url: "http://192.168.1.193:8765/users"
  }
  .then (data) ->
    console.log "success", data

    # parse directory data
    $scope.companyDir = []
    for employee in data.data
      if employee.profile.real_name
        $scope.companyDir.push employee

    # ping employee
    $scope.recentDir = localStorageService.get "recent"
    if !$scope.recentDir
      $scope.recentDir = []

  $scope.pingEmployee = (employee) ->
    # save data
    flag = 0
    for e, num in $scope.recentDir
      if e.id == employee.id
        flag = 1
    if !flag
      $scope.recentDir.unshift employee
      $scope.recentDir = $scope.recentDir.splice 0, 5
      localStorageService.set "recent", $scope.recentDir

    # ping user through server
    $http {
      method: "GET"
      url: "http://192.168.1.193:8765/meeting/" + employee.id
    }
    .then ->
      console.log "success"
    , ->
      console.log "fail"
