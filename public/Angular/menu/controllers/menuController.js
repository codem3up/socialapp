(function(){
    angular
        .module('menuModule')
        .controller('menuController', menuController);
        
        menuController.$inject = ['$state'];
        
        function menuController($state){
            var vm = this;
            
        }
})();