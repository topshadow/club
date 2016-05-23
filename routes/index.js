var  Unit = require('../lib/core');
var $Topic = Unit.$Topic;
//主页,可以翻页
exports.get = function*(){
    var tab = this.query.tab||0;
    var p = this.query.p || 1;

    yield  this.body=$Topic.getTopicsByTab(tab,p);

};



exports.post = function*() {
  console.log('index post.....');
};