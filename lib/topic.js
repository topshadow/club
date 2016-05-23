var Topic = require('../models').Topic;
var cache = require('co-cache')({expire:10000});//缓存10秒

//新建一个话题
exports.addTopic = function(data){
   return  Topic.create(data);
};

//通过id获取一个话题,并增加pv 1
exports.getTopicById = function* (id){
    return Topic.findByIdAndUpdate(id,{$inc:{pv:1}}).exec();
};
exports.getTopicsByTab=function*(tab,p){
   var query;
    if(tab){query.tab=tab}
    return Topic.find(query).skip((p - 1) * 10).sort('-updated_at').limit(10).select('-content').exec();
};

//获取用户所有话题
exports.getTopicsByName = function* (){
    return Topic.find({'user.name':name}).sort('-updated_at').exec();
};
