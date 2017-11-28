### 准备开始
---
#### 学员反馈

 果然像老师说的，vue确实有一中豁然开朗的感觉。加分项一定要学好

 bind绑定元素再简单说一下吧!!!
    v-bind就是给属性赋值 @属性名="表达式"

 想涂宝贝了，好几天没看到了

 学好V U E，走遍天下都不怕！

  老师，我们没有面向对象编程的思想咋办啊，面试的话这部分很重要。蓝瘦香菇。。。。。
        编程的时候，能分代码就分代码，能抽取，能封装多想想怎么分

  写练习时 v-for()里面的参数还是有点搞不清怎么用。 什么情况下用v-model ？
        
        数组v-for="(ele,index) in arr" :key="index"
        对象v-for="(value,key,index) in obj" :key="index"

    <input type="text" v-model="xxx">

    在methods中
        使用 this.xxx获取其值
        当你在js部分需要获取到页面中元素的value时,给该元素加上v-model="xxx"
            再通过this.xxx获取

 v-bind的使用场景不太熟悉
    动态的样式名 v-bind:class="动态的样式名"
    动态的样式  v-bind:style="'background-color:' + myColor  "
    动态的样式中的高度  v-bind:style="'height:' + myHeight  "
#### 复习
* vue启动步骤
    - 1:引包
    - 2:留坑<div id="app"></div>
        + 在vue1.xxx中这个坑可以是body
        + 在vue2.xxx中不能是body标签
    - 3:启动vue `new Vue(options)`
* options(选项)
    - el:字符串或者DOM对象      -> 目的地
    - data:函数return一个对象或者对象 -> 数据  M(Model)
    - template: 字符串  -> 页面 V(View)
    - methods: 函数 -> 功能
* 指令
    - v-model 双向数据绑定，给一个变量名，让页面元素value与之绑定
    - v-text 双标签中使用,给元素的innerText赋值
    - v-html 双标签中使用,给元素的innerHTML赋值
    - v-if v-else 必须是邻居 
        + 元素的插入和移除
    - v-show 元素的隐藏与现实
    - v-bind:属性名="表达式最终的结果||data中属性变量"
        + 简写->   `:属性名`
    - v-on:原生事件="表达式做一些行为||函数的调用"
        + 简写->   `@原生事件`
    - v-for="item in arr" :key="item.id"
        + key用来告诉vue元素与DOM之间位置的关系
        + 如果不告知，vue会自行计算，损耗性能
* 坑点
    - 在vue2.xxx中不能是body标签
    - 在模板中只能有一个根节点

#### 今日重点

#### 组件
* 可组件的部件
    - 便于复用和维护
    - 包含html + css + js内容

#### render
* new Vue 作用是启动Vue程序，而此时可以借助Vue程序完成一些简单的vue功能
    - 但是这种方式不利于项目大的情况,（html+css+js）就多
    - 转换为只启动，调用主体组件(html+css+js),主体组件未来会依赖其他组件，构成项目
* render:c=>c(App)


#### 使用子组件
* 组件内声明子组件关系
    - components是一个对象
    - key是组件名,value是组件对象
* 常见报错
    - Unknown custom element: <my-header> - did you register the component correctly?
    - 未知的自定义元素  <my-header>  
    - 没有注册这个组件

#### 父子组件属性
* 父用子 
    - 在父组件中 `components:{组件名:组件对象}  `
* 子收父参数`props:['属性名']`
  



#### 父子组件使用(父传子)
* 1: 在子组件中 `props:['属性名']`
* 2: 在父组件中 `<sub-vue 属性名="值"></sub-vue>`
        + 常量: `属性名="值"`
        + 变量: `:属性名="变量名"`

#### 小总结
* props 是父组件给你的数据
* data是数据自己的数据
* 加起来就是自己数据的总和
* 在谁的template中使用的变量就是谁的data
* 关于使用data中的属性
   - 凡是template中直接用
   - 凡是js中 this.


#### 注册全局组件
* `Vue.component(组件名,组件对象);`
* 父组件无需声明，直接使用

#### 过滤器
* 过滤器:对数据进行添油加醋，改变显示
* 组件内声明过滤器组件内有效
    - `filters:{ 过滤器名:function(v,argv1,argv2){ return 显示内容;  }}`
* 全局过滤器全局都有效
    - `Vue.filter(过滤器名,function(v,argv1,argv2){ return 显示内容;  } )`
    - 组件内过滤器与全局过滤器同名时
        + 以组件内过滤器优先
* 调用过滤器
    - `{{数据 | 过滤器名(参数1,参数2)}}`

#### 组件生命周期
* 钩子就是事件
* beforeCreate 创建之前
* created 创建之后
* beforeMount 装载前(将数据与页面放入真实的页面的)
* mounted 装载后(将数据与页面放入真实的页面的)
* beforeUpdate 更新数据前
* updated 更新数据后
* activated 激活组件
* deactivated 组件停用
* beforeDestroy 销毁之前
* destroyed 销毁后

* 总结
    -  created和mounted各自的应用场景
       + created适合操作(数据)  `v-if="true"`
       + mounted适合操作(DOM)
    - beforeUpdate 进行二次更新(不建议)
    - mounted 获取最更新
    - beforeDestroy、destroyed 
        + `v-if="false"`
    - activated激活  结合keep-alive   `v-if="true"`
    - deactivated停用  结合keep-alive `v-if="false"`
    - keep-alive组件:目的是缓存组件，减少频繁的创建销毁组件
        + data/methods/components/filter
       
#### 获取DOM元素
*  在元素上声明`ref="xxx"`
*  在js中使用`this.$refs.span`
*  js中能使用的地方是mounted

#### watch
* watch和页面change事件的区别
    - change只能检测页面输入后的改变
* watch监视的变量值的改变
    - 1:页面改变影响内存变量值改变 -> 触发
    - 2:通过js代码直接修改变量值改变 -> 触发
* watch默认监视
    - 基本数据类型值的改变
    - 复杂数据类型引用的改变
* 复杂数据类型应该使用深度监视(包含其属性)
    - 'hero':{ deep:true,handler:function(newV,oldV){   }     }
* watch可以一个个的监视data中的属性
    - 基本数据类型就普通监视就可以
    - 复杂数据类型、如数组、对象 需要深度监视

#### computed(计算属性)
* 增强版的watch ,可以结合多个监视的变量加入逻辑运算
* computed是一个对象
    - key是计算属性的名称，value是函数
    - 函数的return是显示的结果
* 但凡在函数中出现data相关的属性，则纳入监视范围
* 如果一个属性更改与原值一致，则不触发函数运行
* 也可以以对象方式导出多个值

#### options
* new Vue
    - el 目的地,  字符串或者DOM元素
    - template||render 选其一
    - data 在小案例中可以使用
    - template 页面视图,字符串
    - render 渲染的内容,函数
        + c=>c(App), 其中c(App)代表根据组件创建DOM
        + 需要将其作为函数的返回值
        + render接受根据组件创建的DOM，往el上放
* template页面 （View）
* data 是一个函数，return一个对象  数据（Model）
* methods 是一个对象，key是函数名，value是函数体
* components 是一个对象,key是组件名，value是组件对象
* props 是一个数组,元素是字符串，作用是声明子组件接收参数的属性名
* filter 是一个对象,key是过滤器名,value是函数，接受一个value,argv...
    - return 最终显示结果
    - 调用方式: `{{原数据|过滤器名(参数1...)}}`
* watch 是一个对象,key是data中的属性名,value是函数(基本数据)
    - 复杂数据 value是一个对象,`deep:true,handler:fn`
* 父传子
    - 1:子，声明接收参数的属性名 props
    - 2:父，通过属性名传递参数
        + 常量  不用绑定属性(v-bind)
        + 变量  :属性名="变量名"
* 全局API
    - `Vue.component('组件名',组件对象);`
    - `Vue.filter('过滤器名',过滤函数);`

#### 子向父组件通信（获取组件对象）(扩展)
* 0:`var vm = new Vue();`
* 1:vm.$on('事件名',回调函数(形参1,形参2));
* 2:vm.$emit('事件名',数据1,数据2)
* 补充
    - $once('事件名',fn) 只触发一次
    - $off('事件名') 关闭事件

#### 模块化
* 问题:文件依赖顺序
* 问题:同名变量命名冲突
* 模块化编程来解决该问题
    - commonjs中的模块定义
    - 你是一个文件，就是一个模块
    - 该模块可以依赖其他模块，也可以向外导出
    - `依赖require,导出module.exports`

#### 形态2
* 首先全局安装webpack工具
    - `npm i -g webpack`
    - 构建代码,进入到命令行
    - 输入 `webpack ./入口程序main.js ./出口程序build.js`
    - 在html页面中引入build.js

#### 案例:模块化英雄CRUD