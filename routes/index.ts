/// <reference path='../typings/express.d.ts' />

import express = require('express');
import Handler = express.Handler;

const home: Handler = (req, res, next) => {
    res.render('index', { title: 'Express' });
};

export = home;
