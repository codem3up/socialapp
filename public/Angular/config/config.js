(function(){ 
    angular.module('app')
    .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('chat', {
            url: "/chat",
            templateUrl: "Angular/chat/views/chat.html",
            controller: "chatController as ctrl"
        })
        
        $urlRouterProvider.otherwise("chat");
    });
})();