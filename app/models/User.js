var Q = require('q');
var User = require('./userSchema.js');
var Crypto = require('../utils/crypto.js');
var crypto = new Crypto();
var uuid = require('node-uuid');
var redis = require('redis');
var client = redis.createClient();
    
module.exports = function(email, password, role){
    var model = this;
    this.email = email;
    this.password = password;
    this.role = role ? role : 0;
    
    this.save = function(){
        var deferred = Q.defer();

        var credentials = {};
        credentials.email = this.email;
        credentials.password = crypto.generateHash(this.password);
        credentials.role = this.role;
        var user = new User(credentials);
        
        user.save(function(err){
            if(err){
                console.log("Fail");
                deferred.reject(err);
            }   else{
            console.log("User " + model.email + " saved");
            deferred.resolve();
            }
        })
        return deferred.promise;
    }
    
    this.authenticate = function(){
        var deferred = Q.defer();
        
        User.findOne( { email: this.email }, function(err, user){
            if(err){
                console.log("Reject error");
                deferred.reject("Internal Server Error " + err);
            }
            else{
                if(user){
                    if(crypto.checkHash(user.password, model.password)){
                        var guid = uuid.v4();
                        client.set(guid, JSON.stringify({email: model.email, role: model.role}));
                        deferred.resolve(guid);
                    }
                    else{
                        console.log("Reject error 2");
                        deferred.reject("Invalid Credentials");
                    }
                }
            }
        })
        return deferred.promise;
    }
    
    this.find = function(data){
        User.find(data, function(err, users){
            if(err){
                console.log("Error: " + err);
                
            } else{
                console.log("Success", users);
            }
        })
    }
}