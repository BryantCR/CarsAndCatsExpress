const express = require( 'express' );
const app = express();

app.use(express.static(__dirname + "/static"));

app.listen( 8080, function(){
    console.log( 'This server is running in port 8080.' );
});



