/* tslint:disable no-reference only-arrow-functions*/
// 手动方法引入node 和 express 的type definitions 文件
// definitely typed
/// <reference path='node/node.d.ts' />
/// <reference path='node/express.d.ts' />

// 或者安装相关@types 依赖以自动引入。 如@types/express @types/node
// 就不需要上面的三斜线 XML 方式手动引入了。

import express = require('express');
import http = require('http');
import path = require('path');

// 路由中间件
import user = require('./api/user');
import index = require('./routes/index');

const app = express();

// 配置一些常用变量
app.set('port', process.env.PORT || '3000');          // 服务器启动端口
app.set('views', path.join(__dirname, 'views'));    // 将path片段拼成规范的路径 - 放模板文件的目录
// 指定模板引擎
// 在没有显示调用app.engine()的情况下,express 内部会默认调用 app.engine('jade', require('jade').__express);
// 调用render函数时，自动添加jade后缀
// By default, Express will require() the engine based on the file extension.
// @see http://www.expressjs.com.cn/4x/api.html
app.set('view engine', 'jade'); 

// 设置express 静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

// 应用级路由
app.get('/', index);
app.get('/user', user);

// 启动服务器
// OR app.listen() to start server
http.createServer(app).listen(3000, function() {
    console.log('Success at port 3000');
});
