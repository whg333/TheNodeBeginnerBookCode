var handle = {};

function setup(handler){
    for (var pathname in handler) {
        handle['/' + pathname] = handler[pathname];
    }
    //handle = {
    //    '/':handler.start,
    //    '/start':handler.start,
    //    '/upload':handler.upload,
    //    '/show':handler.show
    //}
    return exports;
}

function route(pathname, req, resp, data){
	if(typeof handle[pathname] === 'function'){
		handle[pathname](req, resp, data);
	}else{
		console.log('No request handle found for '+pathname);
        resp.writeHead(404, {'Content-Type':'text/plain'});
        resp.end('404 Not Found!');
	}
}

exports.route = route;
exports.setup = setup;
