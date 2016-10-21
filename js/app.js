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
  var tweet_database = firebase.database()
  tweet_database.ref('tweet/' + 'tweet006').push({
    content: "test",
    provider_id: 1
  });
  tweet_database.ref('tweet/' + 'tweet006').on("value", function(datas) {
    console.log(datas)
  });
}])
