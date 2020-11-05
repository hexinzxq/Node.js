/* 
   CommonJS的包规范由包结构和包描述文件两个部分组成
    -包结构
        *用于组织包中的各种文件
    -包描述文件
        *描述包的相关信息，以供外部读取分析 

    包实际上就是一个压缩文件，解压以后还原为目录。符合规范的目录，应该包含如下文件
        -package.json   描述文件（必须）[这里面不能写注释]
        -bin   可执行二进制文件
        -lib   （库）js代码
        -doc   文档
        -test  单元测试
*/


/* 
    毕业设计：
    SSM、数据库、前端框架
*/

/* 
    NPM(Node Package Mannager)node包管理器{相当于软件管家}
    -借助NPM，Node与第三方模块之间形成了很好的一个生态系统

    NPM命令：
    npm -v    查看版本
    npm version 查看所有模块的版本
    npm search xxx  搜索与xxx相关的包
    npm install/i xxx  安装xxx这个包
    npm init   初始化创建一个package.json文件
    npm remove/r xxx  删除xxx这个包
    npm install 包名 --save  安装包并添加到依赖中★★★★★★
    npm install 下载当前项目所依赖的包
    npm install 包名 -g 全局安装包（全局安装包一般都是一些工具）
*/