
import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

import Home from './Home.js';
import App from './App.js';
import Music from './Music.js';
import Movie from './Movie.js';

Vue.use(VueRouter);

var router = new VueRouter();
router.addRoutes([
    { name: 'home', path: '/home', component: Home ,
children:[
    //绝对路径 /music则表示是home下的music，两个都显示 
    {name:'home.music',path:'music',component:Music},
    {name:'home.movie',path:'movie',component:Movie}
]},
    
]);

//启动
new Vue({
    el: '#app',
    render: c => c(App),
    router
})