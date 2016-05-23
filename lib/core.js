var Comment = require('./comment');
var Topic = require('./topic');
var User = require('./user');

module.exports={
    get $User(){
        return User;
    },
    get $Topic(){
        return Topic;
    },
    get $Comment(){
        return Comment;
    }
};