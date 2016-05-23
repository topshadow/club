var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
    user:{
        name:{type:String,require:true},
        email:{type:String,require:true}
    },
    title:{type:String,require:true},
    content:{type:String,require:true},
    tab:{type:String,require:true},
    pv:{type:Number,default:0},
    comment:{type:Number,default:0},
    created_at:{type:Date,default:Date.now},
    updated_at:{type:Date,default:Date.now}
});

    TopicSchema.index({tab:1,updated_at:-1});
    TopicSchema.index({'user.name':1,updated_at:-1});

    module.exports=mongoose.model('Topic',TopicSchema);