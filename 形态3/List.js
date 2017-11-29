//显示列表
export default {
    template:`
    <div>
        <ul style="background-color:hotpink;">
        <li v-for="(hero,index) in heros" :key="index">
        {{hero.id}} {{hero.name}}
        </li>
        </ul>
    </div>
    `,
    props:['heros']
}