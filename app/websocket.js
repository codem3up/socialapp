module.exports = function(ws){
    var server = ws.createServer(function (conn) {
      
       ws.myConnections.push(conn);
       
	   console.log("Connection Added");
       conn.on("text", function (str) {
           for(var i = 0; i < ws.myConnections.length; i++){
               ws.myConnections[i].sendText(str);
           }
	   })
    
       conn.on("close", function (code, reason) {
        console.log("Removed Connection");
        for(var i = 0; i < ws.myConnections.length; i++){
            if(ws.myConnections[i].key === conn.key){
                ws.myConnections.splice(i, i+1);
            }
        }            
	   })
    
    }).listen(8001)
}