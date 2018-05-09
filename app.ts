// /* tslint:disable no-reference */
///<reference path='node/node.d.ts' />
///<reference path='node/express.d.ts' />

import express = require('express');
import http = require('http');
import path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);
