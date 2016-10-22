angular.module("myChats").controller("mainCtrl", function($scope, mainSrvc, $interval){

  $scope.chatAppName = "Name my chatapp";

  //Dummy data to show what the chat messages should look like
  // to work with the frontend


  $scope.addChat = function(){
    mainSrvc.addChats($scope.newChat.message);
    console.log($scope.newChat.message);
  }

  function getChats(){
    mainSrvc.getChats().then(function(response) {
      $scope.chats = response;
    })
  };

  $scope.deleteChats = function(){
    mainSrvc.deleteChats();
  }

  // Gets initial chats
  getChats();

  // Set up repeating call to get chats
  $interval(getChats, 1000);

})
