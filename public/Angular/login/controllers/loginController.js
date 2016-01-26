(function(){
    angular
        .module('loginModule')
        .controller('loginController', loginController);
        
        loginController.$inject = ['$state', '$sessionStorage', 'loginService', 'toasterService'];
        
        function loginController($state, $sessionStorage, loginService, toasterService){
            var vm = this;
            
            vm.credentials = {};
            
            vm.login = login;
            vm.signup = signup;
            
            function login(credentials){
                loginService.login(credentials)
                .then(function(res){
                    $sessionStorage.sessionToken = res.data.sessionToken;
                    $state.go('menu');
                })
                .catch(function(res){
                    toasterService.error("Failed to log in");
                })
            }
            
            function signup(){
                $state.transitionTo('signup');
            }
        }
})();