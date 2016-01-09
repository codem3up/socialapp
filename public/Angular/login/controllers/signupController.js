(function(){
    angular
        .module('loginModule')
        .controller('signupController', signupController);
        
        signupController.$inject = ['$state'];
        
        function signupController($state){
            var vm = this;
            
            vm.login = login;
            
            function login(){
                $state.transitionTo('login');
            }
        }
})();