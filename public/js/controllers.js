/* Controller */
angular.module('Ctrls', [])
    .controller('mainCtrl',
      function mainCtrl($scope, registerFactory) {
        console.log('test');
        var userDetails = {
            name : $scope.userName,
            phno : $scope.userNo
        };
        registerFactory.sendUserData(userDetails)
            .success(function(jsonData, statusCode){
              console.log('The request was successful!', statusCode,jsonData);
          });
        registerFactory.getEventsData()
            .success(function(jsonData, statusCode){
              console.log('The request was successful!', statusCode,jsonData);
          });

    })
    .controller('eventCtrl',
      function Ctrl($scope, registerFactory) {
        var eventDetails = {
            name : $scope.userName,
            phno : $scope.userNo
        };
        $("#submitBtn").addEventListener("click",function() {
            registerFactory.sendEventData(eventDetails)
                .success(function(jsonData, statusCode){
                  console.log('The request was successful!', statusCode,jsonData);
              });
        })
    });