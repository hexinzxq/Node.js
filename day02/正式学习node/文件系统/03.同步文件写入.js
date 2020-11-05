/* 
        fs(文件系统)
            -文件系统简单来说就是通过Node来操作系统中的文件
            -服务器本质就将本地的文件发送给远程的客户端
            -Node通过fs模块来和文件系统进行交互
            -该模块提供了一些标准文件访问API来打开，读取，写入文件以及与其交互
            -要使用fs模块，首先需要对其进行加载(引入fs模块)
            -fs是核心模块，直接引入不需要下载
                *-config fs = require("fs");
*/

var fs = require('fs');
// console.log(fs);

/* 
    文件操作
    -同步文件的写入
        -手动操作的步骤
            *1.打开文件
                -fs.openSync(path,flags{,mode})
                -path:要打开文件的路径
                -flags:打开文件要做的操作类型
                    r:只读的
                    w:可写的
                -mode:设置文件的操作权限，一般不传
            返回值：
            -该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
            *2.像文件中写入内容
                -fs.writeSync(fd,string{,position{,encoding}})
                    -fd:文件的描述符，需要传递要写入的文件的描述符
                    -string：要写入的内容
                    -position：表示写入的起始位置
                    -encoding：写入的编码，默认utf-8
            *3.保存关闭文件
                -fs.closeSync(fd)
                    -fd:要关闭的文件的描述符
*/
//打开文件
var fd = fs.openSync("hello.txt","w");
// console.log(fd);
//向文件中写入内容
fs.writeSync(fd,"核心");
//关闭文件
fs.closeSync(fd)