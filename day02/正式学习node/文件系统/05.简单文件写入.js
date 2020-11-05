/* 
    简单文件写入
       fs.writeFile(file,data{,options},callback)
       fs.writeFileSync(file,data{,options})

    -file 要操作文件的路径
    -data 要写入的数据
    -options 选项，可以对写入进行一些设置
    -callback 写入完成以后执行的函数
    -flag
        r 只读
        w 可写
        a 追加
    -文件的路径可以是相对路径，也可以是绝对路径
*/

//引入fs模块
var fs = require("fs");
fs.writeFile("hello3.txt","这是通过writeFile写入的内容",{flag:"a"},function(err){
    if(!err){
        console.log("success!");
    }
});