var bodyParser = require('body-parser');
var express = require('express');

module.exports = function(app, router){

    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '../client'));
    app.use('/', router);

    router.use('/api', function(req, res, next) {
        console.log('Privy');
        next();
    });

    return app;

}