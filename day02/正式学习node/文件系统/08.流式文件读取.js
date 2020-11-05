/* 
    流式文件处理
        -适用于一些比较大的文件
        -可以分多次将文件读取到内存中

*/
var fs = require("fs");
//创建一个可读流
var rs = fs.createReadStream("hello3.txt");
//创建一个可写流
var ws = fs.createWriteStream("2.txt");
//监听流的开启和关闭
rs.once("open",function(){
    console.log("可读流打开了");
});
rs.once("close",function(){
    console.log("可读流关闭了");
    //数据读取完毕，关闭了可写流
    ws.end();
});

ws.once("open",function(){
    console.log("可写流打开了");
});
ws.once("close",function(){
    console.log("可写流关闭了");
});
//如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件
//data事件绑定完毕，它会自动开始读取数据
rs.on("data",function(data){
    console.log(data);
    // fs.writeFile("2.jpg",data,function(err){
    //     if(!err){
    //         console.log("写入成功~~~");
    //     }

    // })

    //将读取到的数据写入到可写流中
    ws.write(data);
});