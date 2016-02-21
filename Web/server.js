var http = require('http');
var url = require('url');

function start(port, route){
    function onRequest(req, resp){
        //req.setEncoding('utf-8');

        var data = '';
        var pathname = url.parse(req.url).pathname;
        console.log('Request for '+pathname+' received.');

        //req.on('data', function(chunk){
        //    data += chunk;
        //});

        //req.on('end', function(){
        //    router.route(pathname, req, resp, data);
        //});
        route(pathname, req, resp, data);
    }

    http.createServer(onRequest).listen(port);
    console.log('Http Server start...port='+port);
}

exports.start = start;
