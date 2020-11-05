/* 
    exports和module.exports
        -通过exports只能使用.的方式向外暴露内部变量
            -exports.xxx = xxx

        -而module.exports既可以通过.的方式，也可以直接赋值
            -module.exports.xxx = xxx或
            -module.exports = {}

            [不好区分就都用module.exports]
*/