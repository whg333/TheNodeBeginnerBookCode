//exports.test = test;
//exports.unkonw = undefined;
//
function test1(){
    console.log('test1');
}

function test2(){
    console.log('test2');
}

//exports.test1 = test1;
//module.exports.test2 = test2;

//module.exports.multiply = function(a,b){
//    return a - b;
//}
//
//exports.multiply = function(a,b){
//    return a * b;
//}

var self = {};
self.test3=function(){
    console.log('test3');
}
exports.test = self.test3;

//exports = {
//    field:"field",
//    test: function() {
//        console.log('test');
//    },
//    unkonw:undefined
//}

//exports = function(){
//    this.field = "field";
//    this.test = function(){
//
//    }
//}