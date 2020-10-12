const http = require("http");
const url = require("url");
const fs = require("fs");
const mime = require("./data/mime.json");
const path = require("path");
const data = require("./data/data.json");
const cheerio = require("cheerio");
const server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    //    res.writeHead(300,{"content-type":"text/html;charset=utf-8"})
    console.log(req.url);
    let urlObj = url.parse(req.url);
    console.log(urlObj);
    // 作业实现分页；每页 5条数据；（选做）;
    // 接收get参数：urlObj.query;
    // p = 1 ;perPage = 5; --->start: (p-1)*perPage perPage ; splice
    // 1."/product"    2."/product?name=zhangsan"; 查询参：querystring
    // /?p=3 
    if (urlObj.pathname === "/" || urlObj.pathname === "/index") {
        // 文件读取；
        // let indexData =  fs.readFileSync("./views/index.html")
        // res.end(indexData);
        // 流方式；
        // 组装html；
        let str = "";
        data.forEach(v => {
            str += `<li class="news">
            <a href="javascript:;">
                <img src="${v.imgUrl}" alt="">
            </a>
            <div>
                <h3>
                    <a href="javascript:;">${v.title}</a>
                </h3>
                <div class="info">
                    <span class="tips"><span>${v.from}</span></span>
                    <!-- <span class="line"></span> -->
                    <span class="time">| &nbsp;&nbsp;${v.newTime}</span>
                </div>
            </div>
        </li>`;
        })

        let indexData = fs.readFileSync("./views/index.html");
        let $ = cheerio.load(indexData);
        $(".news-list").html(str);
        // let indexData = fs.createReadStream("./views/index.html");
        // indexData.pipe(res);
        res.end($.html());
    } else if (urlObj.pathname === "/detail") {
        // let indexData =  fs.readFileSync("./views/product.html")
        // res.end(indexData);
        let indexData = fs.createReadStream("./views/detail.html");
        indexData.pipe(res);
    } else {
        if (urlObj.pathname !== "/favicon.ico") {
            // 获取扩展名；
            let ext = path.extname(urlObj.pathname);
            //    console.log("??",ext);
            res.setHeader("Content-Type", mime[ext]);
            // console.log("/views/css" + urlObj.pathname);
            let resData = fs.createReadStream("./views/css" + urlObj.pathname);
            resData.pipe(res);
        }
    }
})

server.listen(3000);