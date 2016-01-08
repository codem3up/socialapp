(function(){ 
    angular.module('app')
    .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('chat', {
            url: "/chat",
            templateUrl: "Angular/chat/views/chat.html",
            controller: "chatController as ctrl"
        })
        
        $urlRouterProvider.otherwise("chat");
    });
})();