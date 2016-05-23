var User = require('../models').User;

//新建一个用户
exports.addUser = function*(data){
  return User.create(data);
};

//根据用户id获取用户信息
exports.getUserById = function*(id){
    return User.findById(id).exec();
};

//通过name获取用户
exports.getUserByName = function*(name){
    return User.findOne({name:name}).exec();
};

//测速
 User.findOne({name:'yangyue'}).exec(function(err,doc){
    console.log(doc);
});
