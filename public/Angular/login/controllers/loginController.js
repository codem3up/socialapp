(function(){
    angular
        .module('loginModule')
        .controller('loginController', loginController);
        
        loginController.$inject = ['$state'];
        
        function loginController($state){
            var vm = this;
            
            vm.credentials = {};
            
            vm.login = login;
            vm.signup = signup;
            
            function login(credentials){
                console.log("credentials");
            }
            
            function signup(){
                $state.transitionTo('signup');
            }
            
        }
})();