(function(){
    angular
        .module('loginModule')
        .controller('loginController', loginController);
        
        loginController.$inject = ['$state', 'loginService', 'toasterService'];
        
        function loginController($state, loginService, toasterService){
            var vm = this;
            
            vm.credentials = {};
            
            vm.login = login;
            vm.signup = signup;
            
            function login(credentials){
                loginService.login(credentials)
                .then(function(res){
                    console.log(res.data);
                    toasterService.success("User Logged in: " + res.data.sessionToken);
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