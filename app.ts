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

const app = express();

app.set('port', process.env.PORT || 3000);
app.listen(3000, function() {
    console.log('Success at port 3000');
});
