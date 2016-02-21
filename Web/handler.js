var qs = require('querystring'),
    fs = require('fs'),
    formidable = require('formidable');

function start(req, resp, data){
    console.log('处理start...');

    var body = '<html>'+
        '<head><meta charset="utf-8" /></head>'+
        '<body><h3>测试</h3><p>Hello</p>再次测试<br/>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="upload">'+
        //'<textarea name="text" rows="20" cols="60"></textarea>'+
        '<br/><input type="submit" value="提交" />'+
        '</form>'+
        '</body>'+
        '</html>';

    resp.writeHead(200, {'Content-Type':'text/html'});
    resp.end(body);
}

function upload(req, resp, data){
    console.log('处理upload...');

    var form = new formidable.IncomingForm();
    form.uploadDir='upload';

    console.log('准备解析上传文件');
    form.parse(req, function(err, fields, files){
        console.log('解析上传文件完成');
        //console.log(files);
        fs.renameSync(files.upload.path, 'upload/test.png');

        //var is = fs.createReadStream(files.upload.path);
        //var os = fs.createWriteStream("upload/test.png");
        //is.pipe(os);
        //is.on('end',function(){
        //    fs.unlinkSync(files.upload.path);
        //});

        resp.writeHead(200, {'Content-Type':'text/html'});
        resp.end('上传的图片为<br/><img src="/show">');
    });

    //resp.writeHead(200, {'Content-Type':'text/plain'});
    //resp.end('你发送的内容为：'+qs.parse(data).text);
}

function show(req, resp, data){
    console.log('处理show...');
    fs.readFile('upload/test.png', 'binary', function(err, file) {
        if(err){
            resp.writeHead(500, {'Content-Type':'text/plain'});
            resp.end(error+'\n');
        }else{
            resp.writeHead(200, {'Content-Type':'image/png'});
            resp.end(file, 'binary');
        }
    });
}

exports[''] = start;
exports.start = start;
exports.upload = upload;
exports.show = show;
