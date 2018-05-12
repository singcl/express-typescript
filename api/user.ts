/// <reference path='../typings/express.d.ts' />

import express = require('express');
import Handler = express.Handler;

const user: Handler = (req, res, next) => {
    res.send('Response with a resource!');
};

export = user;
