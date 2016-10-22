angular.module("myChats").service("mainSrvc", function($http, $q){

  this.getChats = function(){
    let deferred = $q.defer();

    $http.get('http://localhost:3737/api/chats').then(function(response){
      let chatArray = response.data;
      deferred.resolve(chatArray);
    })

    return deferred.promise;
  };

  this.addChats = function(chat){
    //TODO Call server to add to chats
    $http.post('http://localhost:3737/api/chats', {
      message: chat
    });
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
    $http.delete('http://localhost:3737/api/chats');
  }
});
