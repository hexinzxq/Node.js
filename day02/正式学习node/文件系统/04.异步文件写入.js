/* 
    异步文件写入
    fs.open(path,flags{,mode},callback)
        -用来打开一个文件
        -异步调用的方法，结果都是通过回调函数的参数返回的
        -回调函数两个参数
            err：错误对象，如果没有错误则为null
            fd：

    fs.write(fd,string{,position{,encoding}},callback)
        -用来异步写入一个文件

    fs.close(fd,callback)
        -用来关闭文件

*/
//引入fs模块
var fs = require("fs");

//打开文件
fs.open("hello2.txt","w",function(err,fd){
    // console.log(arguments);
    if(!err){
        // console.log(fd);
        //如果没有出错，则对文件进行写入操作
        fs.write(fd,"这是异步写入的内容",function(err){
            if(!err){
                console.log("写入成功");
            }
            //关闭文件
            fs.close(fd,function(err){
                if(!err){
                    console.log("文件关闭");
                }
            });
        })

    }else{
        console.log("出错了，错误为："+err);
        // fs.open("hello2.txt","w",function(err,fd){
        //     console.log("我为你创建了此文件");
        // })
    }
});