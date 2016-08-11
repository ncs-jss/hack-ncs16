/* Controller */
angular.module('Ctrls', [])
    .controller('Ctrls',
      function mainCtrl($scope) {
        console.log('test');
    })
    .controller('studentCtrl',
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

    })
    .controller('eventCtrl',
      function Ctrl($scope, registerFactory) {
        if($("#submitBtn")){
            $("#submitBtn").addEventListener("click",function() {
                var eventDetails = {
                    name : $scope.eventName,
                    phno : $scope.eventNo
                };
                registerFactory.sendEventData(eventDetails)
                    .success(function(jsonData, statusCode){
                      console.log('The request was successful!', statusCode,jsonData);
                  });
            });

        }
        registerFactory.getEventsData()
            .success(function(jsonData, statusCode){
                $scope.events = jsonData;
              console.log('The request was successful!', statusCode,jsonData);
          });
    });