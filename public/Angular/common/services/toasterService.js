(function(){
    angular
        .module('commonModule')
        .factory('toasterService', toasterService);
        
        toasterService.$inject = ['toaster'];
        
        function toasterService(toaster){
            var service = {
                success: success,
                error: error
            }
            
            function success(message){
                toaster.pop('success', "Success", message);
            }
            function error(message){
                toaster.pop('error', "Error", message);
            }
            
            return service;
        }
    
})();