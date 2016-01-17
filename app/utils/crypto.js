var crypto = require("crypto");

module.exports = function(){
    this.generateHash = function(password){
        return crypto.createHash("md5")
            .update(password)
            .digest("hex");
    }
    
    this.checkHash = function(hash, password){
        var checkHash = crypto.createHash("md5").update(password).digest("hex");
        if(hash === checkHash){
            return true;
        }   else{
            return false;
        }
    }
}
