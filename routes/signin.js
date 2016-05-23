var Unit = require('../lib/core');
var $User = Unit.$User;
//登录操作
exports.post = function*(){
    var data = this.request.body;
    //获取用户名和密码

    if(data.name&&data.password){
        var UserInfo = yield $User.getUserByName(data.name);
        console.log(UserInfo);
      UserInfo.password!=data.password
          ?this.body={
                issuccess:false,
                msg:'密码错误'
            } : this.body={issuccess:true,msg:'登录成功'};



    }else{
        this.body={
            issuccess:false,
            msg:'用户名或者密码不能为空'
        }
    }

};