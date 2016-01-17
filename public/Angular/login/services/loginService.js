(function(){
    angular
        .module('loginModule')
        .factory('loginService', loginService);
        
        loginService.$inject = ['$http'];
        
        function loginService($http){
            var service = {
                login: login,
                signup: signup,
            }
            
            function login(credentials){
                return $http.post('/user/login', credentials);
            }
            
            function signup(credentials){
                return $http.post('/user/new', credentials);
            }
            
            return service;
        }
    
})();