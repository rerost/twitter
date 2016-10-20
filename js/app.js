// Initialize Firebase
var config = {
  apiKey: "AIzaSyDMiEQ1cTohE9NVtpwnN-IgPCMeyw1HC64",
  authDomain: "twitter-2c966.firebaseapp.com",
  databaseURL: "https://twitter-2c966.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "817439651469"
};
firebase.initializeApp(config);

angular.module('App', [])
.controller('MainController', ['$scope', function ($scope) {
  $scope.tweets = [{
        "content" : "hello",
        "provider_id" : 1
      },
      {
        "content" : "aaaa",
        "provider_id" : 1
      }
    ];
}])
