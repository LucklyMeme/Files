### 准备开始
---
#### 学员反馈
能不能中午不要在班级吃饭 都是饭味 然后一天也散不尽 到了下午快饿的时候 每次写 for 循环 我就想到饭循环
*** 凃书记，最后同步异步有点蒙。。
*** 感觉同步、异步那没搞明白，跟以前讲的好像正好反了，同步不应该是一条线（顺序执行），异步为多线吗
*** 听黑马岳父讲课，一整天都很精神，希望岳父明天多来几段freestyle。
*** 讲得很好,但是还是迷糊
*** 很懵的一天
*** 每天最幸福的事就是坐在电脑前，闻着满教室的饭香，来想象着今天是什么美味的饭菜。

  老师啊！！！ 你的控制台目录太长了，后面的东东都看不到啊啊啊~~~~~~ 要不就是换行看，很是别扭啊，看着真的不舒服啊啊啊~~~
#### 复习
* 严格模式 + ES6
* 严格模式: 代码的限制
* ES6(语法规范): 代码功能的扩展   ES2015、2016、2017
    - 浏览器来按照规范做实现
* let: 变量 块级作用域,不会自动提升成全局变量
* const: 常量 块级作用域,不会自动提升成全局变量
* 模板字符串:
    - 1:可以包含换行
    - 2:可以嵌入变量 `${对象.变量名}`
* 扩展函数
    - 判断是否以什么开头 `字符串对象.startsWith('xxxx')`
    - 判断是否以什么结尾 `字符串对象.endsWith('xxxx')`
    - 判断是否包含 `字符串对象.includes('xxxx')`
    - 数组操作
        + 查找元素 `数组对象.find((ele,index,arr)=>{ return ele.id == 1;} )`
            * 找得到 返回当前元素
            * 找不到 `undefined`
        + 查找元素 `数组对象.findIndex((ele)=>{ return ele.id == 1;} )`
            * 找得到 返回当前元素的索引
            * 找不到 `-1`
* 箭头函数
    - 箭头函数本身没有this和arguments,会向上级function绑定这些
    - 不能做构造函数
    - 使用规则
        + 基本语法他他他  `() => {}`
        + 一个参数小括省  `num => {} `
        + 一行代码大括省  `num => num`
        + 并且不需要return
* setter
    - API多写两遍就ok
    - setter 对属性的设置器,可以设置行为   obj.name = '1234';触发
    - getter 对属性的获取器,可以设置行为   obj.name 触发
* babel 是干嘛的 代码转换器  es2015/2016/2017/react
* ES6代码放心写
* nodejs代码是JavaScript,
    - 通过代码上判断当前环境是否包含document||window就能区分当前的环境
* node中的全局对象（拿来直接用）
    - console
    - process.argv(命令行工具的开发)
* 核心对象fs`const fs = require('fs');`
    - 读 `fs.readFile(path,不知何时读取完毕，读完后续的操作callback);`
        + `callback(err,data)`
    - 写 `fs.writeFile(path,数据,callback);`
        + `callback(data)`
* 在node中，参数回调函数的位置，统一在最后
* 回调函数的应用，更多是为了处理异步操作的后续行为
    - 在node中，有回调，就是异步函数
* 在node中,回调函数的参数里面,错误对象在最前


#### 今日重点

#### process.env（全局对象）
* vue中会出现这个属性
* process.env 是一个对象，我们可以通过其.属性名来获取具体的环境变量值
    - 简单区分不同的机器

#### filename（全局对象）
* __filename 获取当前运行文件的目录,绝对路径
* __dirname 当前运行文件的绝对路径

#### 核心对象path
* 1:`const path = require('path');`
* 路径 -> 在处理路径的时候很擅长,但是，不管路径是否存在文件
* 拼接并修正路径 `path.join(__dirname,'a','b');` 以当前/a/b
* 接收一个合法的路径字符串，转换成一个对象
    - `let pathObj = path.parse(mypath);`
* 接收一个路径对象，转换成一个字符串路径
    - `let str = path.format(pathObj);`

```javascript
{ root: 'C:\\',
  dir: 'C:\\Users\\孙悟空',
  base: '金箍棒.txt',   该属性可以用于修改文件名和后缀
  ext: '.txt',
  name: '金箍棒' }

```
#### 模块
* 弊端
    - 在js中要涉及到逻辑,还要在html中，为逻辑对象考虑引用顺序
    - 所有对象默认都是全局对象，命名冲突
    - commonjs规范
    - 一个文件就是一个模块
        + 导入用require('./xxx.js');
        + 导出用module.exports = xxx;
        + 在每一个模块内声明的变量属于模块内的作用域
* 不要关注打包工具，关注编程代码思想

#### 包（文件夹）
* 多个文件，有效的被组织与管理的一个单位
* 留一个入口
* 把入口及依赖记录下来，通过工具能更好的管理代码，操作

#### npm
* 自己先有一个包描述文件
* 创建一个包描述文件 `npm init`
* 下载一个包 `npm install art-template jquery@1.5.1 --save`
    - 记录依赖`--save`
* 根据package.json文件中的`dependencies`属性恢复依赖
    - 恢复包 `npm install`
* 卸载一个包 `npm uninstall jquery@1.5.1 --save`
* 查看包的信息
    - `npm info jquery`
* 查看包的信息中的某个字段(版本)
    - `npm info jquery versions`
* 查看包的文档
    - `npm docs jquery`
* 安装全局命令行工具
    - `npm install -g http-server`
* 卸载全局命令行工具
    - `npm uninstall -g http-server`
* 查看全局包的下载路径
    - `npm root -g`

#### nrm是npm的镜像源管理工具
* 1:全局安装 `npm install -g nrm`
* 2:查看当前可选的镜像源 `nrm ls`
* 3:切换镜像源 `nrm use taobao`

#### 包的加载机制
* 我们未来可能需要辨识一个包中，我们要获取的是哪一个类型的程序
* 1:查找node_modules下的包名文件夹中的main属性(常用)
* 2:不常用:查找node_modules下的包名.js
* 3:查找node_modules下的包名文件夹中的index.js(常用)

### http核心模块
---
#### http超文本传输协议
* 协议至少双方 -> http双方！！
* 客户端(浏览器)    -> 服务器
    - 原生应用(QQ)  -> 服务器

#### 请求与响应交互的过程
* 见图

#### 主体对象
* 服务器对象
* 客户端对象
* 请求报文对象(对于服务器来说，是可读)
* 响应报文对象(对于服务器来说，是可写)

#### 创建服务器步骤
* 1:引入http核心对象
* 2:利用http核心对象的.createServer(callback); 创建服务器对象
* 3:使用服务器对象.listen(端口,ip地址) 开启服务器
* 4:callback(req,res) 根据请求处理响应

#### 请求对象
* 请求首行中的url `req.url ` 
* 请求首行中的请求方式 `req.method`
* 请求头中的数据`req.headers`  是一个对象
* 头信息中，也可以作为与服务器交互的一种途径

#### 获取请求体数据
* $('#xx').on('submit',function(e){    })
* req.on('data',function(d){ d.toString(); })
* d.toString();

#### querystring核心对象
* querystring.parse(formStr)
* username=jack&password=123转换成如下
* { username: 'jack', password: '123' }

#### 响应对象
* 响应首行 `res.writeHead(状态码)`
* 写响应头 
    - 一次性写回头信息
        + `res.writeHead(200,headers)`
    - 多次设置头信息
        + `res.setHeader(key,value);`
* 写响应体
    - 一次性写回响应体
        + `res.end();`
    - 多次写回响应体
        + `res.write();`

#### 请求与响应
* 头行体
* content-type是对请求或者响应体数据，做出的说明

#### 响应体数据
* res.write('字符串'||读出文件的二进制数据)
* res.end('字符串'||读出文件的二进制数)

#### 回写页面
* 英雄列表
* art-template http 
* 只能是访问 get请求   url: /hero-list  才返回该数据
* 其他请求返回ok

#### 总结
* 全局对象
    - __dirname 文件夹绝对路径
    - process.env 知道是干嘛 是一个环境变量对象
* 核心对象
    - path
        + join();拼接并修正路径
        + 一对
            * 解析成对象 parse(str)
            * 解析成字符串format(obj)
    - querystring
        + parse(); 接受键值对字符串
* 包
    - package.json
        + main 入口
        + 依赖
        + name 包名
* npm 命令
    - 下载 `npm install 包名@版本号 --save`
    - 卸载 `npm uninstall 包名@版本号 --save`
* 全局操作加-g
* http
    - 定义客户端与服务器之间数据交互的格式
    - 头行体
        + 作为编写服务器来说，请求报文是只读
        + 作为编写服务器来说，响应报文是只写
    - 请求数据，响应数据，对体应该有一个说明
        + 头: content-type
* 服务器创建步骤
    - 1:引入核心对象http
    - 2:创建服务器对象
    - 3:开启监听-> 端口与ip
    - 4:根据请求方式 + url 处理请求响应数据
* 模块
    - nodejs是commonjs规范的实现
        + commonjs 规定一个模块就是一个文件
        + 后端语言应具备文件操作等....
    
* 包的查找机制
    - 1:node_modules下找包名文件夹，package.json文件main属性
    - 2:node_modules下的包名.js(不常用)
    - 3:node_modules下找包名文件夹index.js
* node_modules也会逐级向上查找，直到盘符根目录

