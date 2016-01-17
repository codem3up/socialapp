var User = require('./models/User.js');
var redis = require('redis');
var client = redis.createClient();

module.exports = function(app){
    app.get('*', function(req, res){
        res.sendfile('./public/index.html');
    });
    
    
    app.post('/user/new', function(req, res){
        var user = req.body;
        if(user && user.email && user.password && user.confirm){
            if(user.password === user.confirm && user.password.length > 5){
                user = new User(user.email, user.password);
                user.save()
                .then(function(msg){
                    res.status(200).send(msg);
                })
                .catch(function(err){
                    res.status(500).send(err);
                })
            }
        }
    })
    
    app.post('/user/login', function(req, res){
        var user = req.body;
        if(user && user.email && user.password){
            user = new User(user.email, user.password);
            user.authenticate()
            .then(function(token){
               console.log("User Authenticated: " + token);
               res.status(200).json({ sessionToken: token });
            })
            .catch(function(err){
                console.log("User Not authenticated");
                res.status(403).send(err);
            })
        }
    })
}