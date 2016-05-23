var Unit = require('../lib/core');
var $User = Unit.$User;

//用户注册
exports.post = function*(){
    var data = this.request.body;

    var userExit = yield $User.getUserByName(data.name);
    if(userExit)
    {
       // this.flash({error:'用户名已存在'});
        return this.redirect('back');
    }
    yield $User.addUser(data);

    this.body={
        issuccess:true,
        msg:'注册成功'
    };

    console.log('signup post.........................');


        };