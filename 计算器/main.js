//默认导入，export  default{}
import Vue from '../vue.js';
//export 和 import 只能在顶级作用域 不能再{}中
import App from './App.js';

//启动
new Vue({
    el:'#app',
    render:c=>c(App)
});
