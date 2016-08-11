/* Controller */
angular.module('mainCtrl', [])
    .controller('mainCtrl',
      function mainCtrl($scope, registerFactory) {
        console.log('test');
        var userDetails = {
            name : $scope.userName,
            email : $scope.userEmail
        };
        registerFactory.sendUserData(userDetails)
            .success(function(jsonData, statusCode){
              console.log('The request was successful!', statusCode,jsonData);
          });
        registerFactory.getEventsData()
            .success(function(jsonData, statusCode){
              console.log('The request was successful!', statusCode,jsonData);
          });

    });