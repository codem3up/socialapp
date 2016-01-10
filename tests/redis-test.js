module.exports = function(){
    var redis = require('redis');
    var client = redis.createClient();


    var user = {
        userName: "Andrew",
        password: "password1022",
        role: 'superuser', 
        age: 22,
    }
    
    client.set('guid2', JSON.stringify(user));

    client.get('guid2', function(err, reply){
        var user2 = JSON.parse(reply);
        console.log(user2);
    })
}