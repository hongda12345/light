var light=require('./light');
var child=require('child_process')
var app=light();
/*对客户端信息的接收能力  响应能力*/
app.listen(8888,function(){
    console.log(app.port,"ok");
})
var url="/list/hongsa";
var mode="/list/:id";
var str=mode.replace(/:[^\/]+/,"([^\/]+)");
str=str.replace(/\//g,"\\/")
str="/^"+str+"/";
console.log(eval(str).exec(url)[1]);
app.get("/abc",function(req,res){
    res.send("abc")
})
app.get("/list/:id",function(req,res){
    res.send(req.params.id);
})