var test = require('./controllers/test');
var user = require('./controllers/user');

module.exports = function(router){

    router
        .route('/')
        .get(test.getMessage);

    router
        .route('/error')
        .get(test.getError);

    router
        .route('/api')
        .get(test.getMessage);

    router
        .route('/api/user/:id')
        .get(user.findById);

}