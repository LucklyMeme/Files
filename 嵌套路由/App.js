

export default {
    template:`
      <div>
      <router-link :to="{name:'home.music'}">我的音乐</router-link>
      <router-link :to="{name:'home.movie'}">我的电影</router-link>
      <!-- 显示 home的坑 -->
         <router-view></router-view>
      </div>
    `
}