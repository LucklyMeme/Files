

export default {
    template:`
    <div>
       <!-- <a href="#/home">标签去首页</a>
        <a href="#/home">标签去首页</a>
        <a href="#/home">标签去首页</a>
        <router-link to="/home">组件去首页</router-link>
        <router-link to="/home">组件去首页</router-link>
        <router-link to="/home">组件去首页</router-link>-->
        <router-link :to="{name:'home'}">组件去首页</router-link>
        <router-link :to="{name:'home'}">组件去首页</router-link>
        <router-link :to="{name:'home'}">组件去首页</router-link>

        <router-view></router-view>
    </div>
    `

}