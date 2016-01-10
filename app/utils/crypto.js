var crypto = require("crypto");

module.exports = function(){
    this.generateHash = function(password){
        return crypto.createHash("md5")
            .update(password)
            .digest("hex");
    
    }
}
