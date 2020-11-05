/* 
    其他操作
     验证路径是否存在
     fs.existsSync(path)
*/
var fs = require("fs");
// var isExists = fs.existsSync("hello.txt");
// console.log(isExists);


/* 
    fs.stat(path,callback)
    fs.statSync(path)
        -获取文件状态
        -它会给我们返回一个对象，这个对象中保存了当前对象状态的相关信息
*/
// fs.stat("hello.txt",function(err,stats){
//     /* 
//         size:文件大小
//         isFile():是否是一个文件
//         isDirectory():是否是一个文件夹
//         ........
//     */
//     console.log(stats);
// })



/* 
   fs.unlink(path,callback)
   fs.unlinkSync(path) 
        -删除文件

*/
// fs.unlinkSync("hello2.txt");

/* 
    fs.readdir(path{,options},callback)
    fs.readdirSymc(path{,options})
        -读取一个目录的目录结构
        -files是一个字符串数组，每一个元素就是一个文件夹或文件名
*/
// console.log("=======================");
// fs.readdir(".",function(err,files){
//     if(!err){
//         console.log(files);
//     }
// });

/* 
    fs.truncate(path,len,callback)
    fs.truncateSync(path,len)
        -截断文件,将文件修改为指定的大小（中文的话一个字为3字节）
*/
// fs.truncateSync("hello3.txt",10)


/* 
    fs.mkdir(path{,mode},callback)
    fs.mkdirSync(path{,mode})
        -添加一个目录
*/
// fs.mkdirSync("path{,mode}");
// fs.rmdirSync("path{,mode}"); //删除一个目录


/* 
    fs.rename(oldPath,newPath,callback)
    fs.renameSync(oldPath,newPath)
        -对文件进行重命名
*/
// fs.renameSync("hello.txt","newPath");


/* 
    fs.watchFile(filename{,options},listener)
        -监视文件的修改
        filename 要监视文件的名字
        options 配置选项
        listener 回调函数，当文件发生变化时，回调函数会执行
            在会点函数中会有两个参数
                curr  当前文件状态
                prev  修改前文件状态
                    --这两个对象都是stats对象
*/
// fs.watchFile("hello4.txt",{1000},function(curr,prev){
//     console.log("修改前文件大小"+prev.size);
//     console.log("修改后文件大小"+curr.size);
// })