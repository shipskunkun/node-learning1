# express

<a name="Ks75i"></a>
## 定义
基于 Node.js 平台，快速、开放、极简的 Web 开发框架<br />

<a name="XfX4e"></a>
## 简单的思维导图
![](https://cdn.nlark.com/yuque/0/2020/png/2467388/1602299747972-64104e8f-78de-4835-9fa5-c64754e8bc9d.png)<a name="3IEyh"></a>
## 代码
<a name="uQB4J"></a>
### use
代码中没看懂的：

```javascript
app.use(express.static('public'));
// 把 public 挂载到 / 下面，为程序托管位于程序目录下的public目录下的静态资源：
```
use 是什么意思<br />**app.use([path,], function [, function...])**<br />挂载[中间件](http://expressjs.com/guide/using-middleware.html)方法到路径上。如果路径未指定，那么默认为"/"。<br />
<br />
<br />如果use中没有指定路径，所有的请求，中间件都会执行

```javascript
app.use(function(req, res, next) {
    console.log('Time: %d', Date.now());
    next();
});
```
<a name="xVyqi"></a>
### __dirname

```javascript
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

//创建文件 main.js
$ node main.js
/web/com/runoob/nodejs
```
**__dirname** 表示当前执行脚本所在的目录。

当前脚本的上一层，包含当前脚本的目录
<a name="cCsHN"></a>
### __filename
**__filename** 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。

```javascript
$ node main.js
/web/com/runoob/nodejs/main.js

//包含当前文件名
```

<br />

<a name="WngRF"></a>
### res.end([data] [, encoding])
结束本响应的过程。这个方法实际上来自**Node**核心模块，具体的是[response.end() method of http.ServerResponse](https://nodejs.org/api/http.html#http_response_end_data_encoding_callback)。<br />用来快速结束请求，没有任何的数据。如果你需要发送数据，可以使用[res.send()](https://www.runoob.com/w3cnote/express-4-x-api.html#toc_67)和[res.json()](https://www.runoob.com/w3cnote/express-4-x-api.html#toc_62)这类的方法。<br />

<a name="u4bZE"></a>
### stream 流
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

```javascript
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // 数据接收完成
      console.log(body);
   });
}
```
所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

- **data** - 当有数据可读时触发。<br />
- **end** - 没有更多的数据可读时触发。<br />
- **error** - 在接收和写入过程中发生错误时触发。<br />
- **finish** - 所有数据已被写入到底层系统时触发。<br />
