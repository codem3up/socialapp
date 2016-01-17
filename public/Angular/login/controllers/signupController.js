(function(){
    angular
        .module('loginModule')
        .controller('signupController', signupController);
        
        signupController.$inject = ['$state', 'loginService', 'toasterService'];
        
        function signupController($state, loginService, toasterService){
            var vm = this;
            
            vm.login = login;
            vm.signup = signup;
            
            function login(){
                $state.transitionTo('login');
            }
            
            function signup(credentials){
                loginService.signup(credentials)
                .then(function(res){
                    toasterService.success("User Registered");
                })
                .catch(function(res){
                    toasterService.error("Failed to Register")
                })
            }
        }
})();