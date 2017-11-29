export default{
    template:`
    <div>
     查询字符串方式:
     <ul>
        <li :class="index%2==0?'red':'green'" v-for="(hero,index) in heros" :key="index">
        {{hero.name}}  <router-link :to="{name:'detail',query:{id:hero.id} }">查看详情</router-link>
        </li>
    </ul>
    path 方式：
    <ul>
        <li :class="index%2==0?'red':'green'" v-for="(hero,index) in heros" :key="index">
        {{hero.name}} <router-link :to="{name:'detail',params:{mid:hero.id}}">查看详情</router-link>
        </li>
    </ul>
    </div>
    `,
    data() {
        return {
            heros: [{ id: 1, name: '马云' }, { id: 2, name: '李嘉诚' }, { id: 3, name: '刘强东' }, { id: 4, name: '王卫' }, { id: 5, name: '王健林' }],
            mid: ''
            
        }
    }
}