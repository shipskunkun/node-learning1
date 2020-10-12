const http = require("http");
const fs = require("fs");
// res.write();  res.end();
let server = http.createServer((req,res)=>{
    let url = req.url;
    if(url=="/"){
        let data =  fs.readFileSync("index.html");
        res.end(data);
    }else if(url=="/sse"){
        res.setHeader("content-type","text/event-stream;charset=utf-8");
        // 服务端端定时推送数据到客户端；
        setInterval(() => {
            res.write("data:时间是"+new Date()+"\r\n\r\n");
        }, 1000);
    }
    // res.write()
})
server.listen(4000);
