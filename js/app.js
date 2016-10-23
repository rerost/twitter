var myApp = angular.module("myApp", ["firebase"]);

myApp.controller('MyController', ['$scope', '$firebase',
  function($scope, $firebase) {
    var ref = new Firebase("https://twitter-2c966.firebaseio.com/tweet");
    $scope.messages = $firebase(ref).$asArray();

    $("#messageInput").keypress(function (e) {
      if (e.keyCode == 13) {
        ref.push({content : $('#messageInput').val(), provider_id : 1})
      }
    })
  }
]);
