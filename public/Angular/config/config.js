(function(){ 
    angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('chat', {
            url: "/chat",
            templateUrl: "Angular/chat/views/chat.html",
            controller: "chatController as ctrl"
        })
        
        $urlRouterProvider.otherwise("chat");
    });
})();