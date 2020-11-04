//引入其他的模块
/* 
    在node中，通过require（）函数来引入外部的模块
    --require（）可以传递一个文件的路径作为参数
    --node会自动根据该路径来引入外部模块
    --这里路径，如果使用相对路径，必须使用. 或 ..开头


    使用require（）引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块


    我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块


    -模块分成两大类
        *核心模块
            -由node引擎提供的模块
            -核心模块的标识就是模块的名字
        *文件模块
            -由用户自己创建的模块
            -文件模块的标识就是文件的路径（绝对路径、相对路径）
                -相对路径使用.或..开头
*/
// var md =  require("./02.module");
var math = require('./04.math');
// console.log(md);
console.log(math.add(4,5));
console.log(math.mul(4,5));

//核心模块引入方法
var fs = require('fs');
console.log(fs);