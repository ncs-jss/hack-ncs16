'use strict';
var blogDir=angular.module("blogApp",['blogControllers']);

/* Directives */

blogDir.directive("navBar" , function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    },
   templateUrl:'../partials/navbar.html'
  }; 
});

blogDir.directive("sideBar" , function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    },
   templateUrl:'../partials/sidebar.html'
  }; 
});

blogDir.directive("heroBanner" , function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    },
   templateUrl:'../partials/herobanner.html'
  }; 
});

blogDir.directive("blogFooter" , function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    },
   templateUrl:'../partials/footer2.html'
  }; 
});

// blogDir.directive('onFinishRenderFilters',function($timeout){
//   return {
//     restrict: 'A',
//     link: function (scope,element,attr){
//       if(scope.$last === true ) {
//         $timeout(function() {
//           scope.$emit('ngRepeatFinished');
//         });
//       }
//     }
//   }
// })