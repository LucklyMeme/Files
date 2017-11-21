
#### 复习
* 晚上练习
    - 1:保证主线 -> 练习
    - 2:将相关知识点记录到脑图中，案例不用一个个敲
    - 3:非重点看一看就好
    - 4:重重点：使用所学的做出东西来 -> 项目

#### node基础总复习
* ES6常用
    - 严格模式 是代码的约束
        + 函数内this
        + with语句
    - ES6是代码功能的扩展  "use strict";
    - let const var之间的区别， var会提升全局，其他的都是块级 {}
        + 变量查找机制，就近原则，也能向上查找
    - let 就是变量
    - const 就是常量
    - 模板字符串 ` 可以包含换行    ${变量.属性}`
    - 函数扩展
        - 字符串的3个
            + 判断以什么开头、结尾、包含
        - 数组的2个
            + 找元素和找索引
                * 返回值: find:元素或者undefine
                    - findIndex: 索引或者-1
    - 箭头函数本身没有this和arguments，会根据上级的function绑定
    - Object.defineProperty(obj,属性名,options);   底层实现
        + 作用是对于obj.属性名 的获取和设置进行操作
    - babel是什么？ js语法转换器  ES2015/2016/2017/react]
    - 如何区分node还是浏览器环境的js运行代码
        + 判断是否有window等对象.....
    - node组成部分
        + 需要引入:node提供的核心对象
        + 需要引入:引入的第三方模块或者我们自己写的模块
        + 全局对象对象(拿来直接用)
            * console、__dirname|filename、require、module、exports(module.exports的简写)、setTimeout、setInterval、process
            * process.env 环境变量 是个对象
            * process.argv 命令行参数  是个数组
        + 核心对象
            * fs 读写->  第三方包 fs-extra
                - 这个包的特点是目录可以不存在，自动创建
                - outputFile 加强版的writeFile
                - ensureDir 确保目录存在  
                - copy 复制
                - remove 另外删除也相对有用一点，即时目录内有文件也能删除
            * path
                - 拼接并修正路径join
                - 解析路径返回对象parse 
                    + base属性可以修改-> 是文件全名xxx.xxx
                - 解析对象返回字符串format
            * querystring
                - 解析键值对，返回对象  
                - body-parser第三方中间件内部使用了其
            * http
                - 思想上，http就是客户端与服务器之间数据格式的约定
                - 头行体
                - 请求报文 
                    + (客户端编程请求报文对象可写)
                    + (服务端编程请求报文对象可读)
                    + 头行体
                - 响应报文  
                    + (客户端编程响应报文对象可读)
                    + (服务端编程响应报文对象可写)
                    + 头行体
                        * 头 1次和多次设置
                        * (多次是为了方便循环调用，比如数组添加头)
                        * 体 1次和多次设置
                - node中也能作为客户端发送请求
    - express
        * 创建服务器
        *  1:引入对象支持
        *  2:创建服务器
        *  3:监听端口开启服务器
        *  4:根据请求处理响应   
    - 应用级中间件 `app.use`
    - 路由级中间件 `router.请求方式(url,事);`
        + 在最后写上 `.all('*')` 404找不到页面的处理
    - 内置中间件
        + URL:/public
        + `app.use('/public',express.static('./public'));`
            * 请求url是以/public开头，那么只有我这个中间件来处理，将你请求的url对应的文件资源返回给你
    - 第三方中间件
        + 解析post请求体数据、解析cookie、使用session
        + 以上中间件都是为了在路由中，为业务实现而服务的
        + 都需要在`app.use(router)` 的前面设置中间件位置
    - 错误处理中间件
        + 传递一个4个参数的函数, `next(err)` 触发
        + 给用户一个错误且美好的体验
    - 以上中间件都是独立的发生的一件事，为了在应用中产生效果，最终添加后到应用中间件队列中
        + `app.use()`
    - 参数获取
        + url上的参数
            * 查询字符串  req.query
            * path方式  req.params
        + post请求数据`body-parser`  => req.body
    - mysql
        + 连接池思想
            * 避免频繁开关造成资源浪费
            * 一个请求就维持一个连接，不合适
            * 一次性创建数个连接，需要使用取出，使用完毕，放回
            * 晚开早关(比如茅房)

```javascript
function fun () {
  if ( ) {
   . . .
  } else if ( ) {
   . . .
  }
}
var 会往上提，最高提到函数，没有函数就是全局
let 严格按照大括号,块级来


fs.remove('/tmp/myfile')
.then(() => {
  console.log('success!'); 成功后的回调函数
})
.catch(err => {
  console.error(err); 异常后的回调函数
})


```

#### node课程总结
* 深入理解请求与响应的交互方式
    - 头行体
* 如何区分核心对象和第三方包
    - package.json里面出现的包，就是第三方的，否则就是核心对象
* 这么多包，怎么记得住名字和功能
    - 项目中用到，用多自然记得
    - 也可以查看package.json文件
    - art-template 单用 -> 通过文件 + 数据 = html字符串内容
    - express 服务器应用程序框架
    - express-art-template 依赖art-template
        + 专门为express提供的
    - body-parser 解析post请求体数据
    - fs-extra 文件操作增强
        + 自动创建不存在的目录路径
    - formidable
        + 解析请求体数据 -> 包含文件
        + 默认存储路径可以修改 form.uploadDir
    - captchapng2
        + 生成验证码
    - express-session
        + 操作session的中间件
    - 恢复所有包
        + npm i
    
#### 框架与包库的区别
* 库 是我们调用其的函数代码
* 框架 是我们的代码,被其调用运行

