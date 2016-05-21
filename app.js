var app = require('koa')();
var logger = require('koa-logger');
var bodyparser = require('koa-bodyparser');
var staticCache = require('koa-static-cache');
var errorhanlder = require('koa-errorhandler');
var session = require('koa-generic-session');
var MongosStore = require('koa-generic-session');
var flash = require('koa-flash');
var gzip = require('koa-gzip');
var scheme = require('koa-scheme');
var router = require('koa-router');
var routerCache = require('koa-router-cache');
var render = require('co-ejs');
var config = require('config-lite');

var merge = require('merge-descriptors');

