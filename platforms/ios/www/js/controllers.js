angular.module("pam.controllers").controller("GeneralCtrl", function($scope) {
  return console.log("General!!!");
});

angular.module("pam.controllers").controller("DeliveryCtrl", function($scope) {
  return console.log("Delivery!!!");
});

angular.module("pam.controllers").controller("HomeCtrl", function($scope, $timeout) {
  return console.log("HOME!!!");
});

angular.module("pam.controllers").controller("MeetingCtrl", function($scope, $http, localStorageService) {
  $http({
    method: "GET",
    url: "http://192.168.1.193:8765/users"
  }).then(function(data) {
    var employee, i, len, ref;
    console.log("success", data);
    $scope.companyDir = [];
    ref = data.data;
    for (i = 0, len = ref.length; i < len; i++) {
      employee = ref[i];
      if (employee.profile.real_name) {
        $scope.companyDir.push(employee);
      }
    }
    $scope.recentDir = localStorageService.get("recent");
    if (!$scope.recentDir) {
      return $scope.recentDir = [];
    }
  });
  return $scope.pingEmployee = function(employee) {
    var e, flag, i, len, num, ref;
    flag = 0;
    ref = $scope.recentDir;
    for (num = i = 0, len = ref.length; i < len; num = ++i) {
      e = ref[num];
      if (e.id === employee.id) {
        flag = 1;
      }
    }
    if (!flag) {
      $scope.recentDir.unshift(employee);
      $scope.recentDir = $scope.recentDir.splice(0, 5);
      localStorageService.set("recent", $scope.recentDir);
    }
    return $http({
      method: "GET",
      url: "http://192.168.1.193:8765/meeting/" + employee.id
    }).then(function() {
      return console.log("success");
    }, function() {
      return console.log("fail");
    });
  };
});

angular.module("pam.controllers").controller("MeetingThanksCtrl", function($scope) {
  return console.log("MeetingThanks!!!");
});
