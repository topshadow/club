//测试koa组件的frouter
var app = require('koa')();
var router = require('koa-frouter');

app.use(router(app,'../routes'));


app.listen(3001,function(){
    console.log('Server listening on:',3001);
});
