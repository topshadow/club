var User = require('../models').User;
var request = require('co-supertest');
var app = require('../app');

describe('/signin',function(){
    var agent = request.agent(app);
    //
    // before(function(done){
    //     User.remove({name:'nswbmw'},done);
    // });
    // after(function(done){
    //     User.remove({name:'nswbmv'},done)
    // });

    it('GET /signup without cookie',function*(){
       yield agent.get('/signain').expect(200).end();
    });
});
