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
var router = require('koa-frouter');
var routerCache = require('koa-router-cache');
var render = require('co-ejs');
var config = require('config-lite');

var merge = require('merge-descriptors');
var core = require('./lib/core');
var renderConf = require(config.renderConf);
// merge(renderConf.locals.$app.name || {},core,false);
// app.keys = [renderConf.locals.$app.name];


//errorhandler->bodyparser->staticCache->logger->session->mongoStore->flash->scheme
//->router-cache->coa-gzip->render->
app.use(errorhanlder());
app.use(bodyparser());
app.use(staticCache(config.staticCacheConf));
app.use(logger());
// app.use(session({store:new MongosStore(config.mongodb)}));
// app.use(flash());
// app.use(scheme(config.schemeConf));
// app.use(routerCache(app,config.renderConf));
// app.use(gzip());
app.use(render(app,renderConf));
app.use(router(app,config.routerConf));


if(module.parent){
    module.exports = app.callback();
}else {
    app.listen(config.port, function () {
        console.log('Server listening on:', config.port);
    });
}
