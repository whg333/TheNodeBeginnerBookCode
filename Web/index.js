var server = require('./server');
var router = require('./router');
var handler = require('./handler');
var mod = require('./mod');
console.log(mod.test());

server.start(8888, router.setup(handler).route);
