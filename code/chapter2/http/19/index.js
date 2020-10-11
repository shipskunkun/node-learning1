var http = require('http')
var fs = require('fs')

http
	.createServer(function(req, res){
		console.log(req)
		res.writeHead(200)
        
        fs.createReadStream(__dirname + '/index.html')
            .pipe(res)
    })
		.listen(3000)