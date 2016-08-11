angular.module('mainFactory',['ncsApp'])
    .factory('registerFactory',function($http) {
        'use strict';
        console.log('test');
        var factory = {};

        factory.sendEventData = function(eventDetails){
              return $http.post('/events',eventDetails)
                .error(function (data) {
                    console.log('There was an error!', data);
              });
        };

        factory.sendUserData = function(userDetails) {
            // return posts;
            return $http.post('/register',userDetails)
              .error(function (data) {
                console.log('There was an error!', data);
              });
        };
        factory.getEventsData = function() {
            // return posts;
            var eventData = 0;
            return $http.get('/events', eventData)
              .error(function (data) {
                console.log('There was an error!', data);
              });
        };
        return factory;
    });
