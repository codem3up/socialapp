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
        
        .state('login', {
            url: "/login",
            templateUrl: "Angular/login/views/login.html",
            controller: "loginController as ctrl"
        })
        
        .state('signup', {
            url: "/signup",
            templateUrl: "Angular/login/views/signup.html",
            controller: "signupController as ctrl"
        })
        
        .state('menu', {
            url: "/menu",
            templateUrl: "Angular/menu/views/menu.html",
            controller: "menuController as ctrl"
        })
        $urlRouterProvider.otherwise("chat");
    });
})();