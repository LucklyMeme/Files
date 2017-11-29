export default {
    template:`
    <div style="background-color:blue;">
     ID: <input type="text" v-model="addId">
     名称: <input type="text" v-model="addName">
     <button @click="addHero">添加</button>
    </div>
    `,
    //子组件接收数据
    props:['heros'],
    data(){
        return {
            addId:'',
            addName:''
        }
    },
    // 事件函数
    methods:{
        addHero(){
            this.heros.push({
                id:this.addId,
                name:this.addName
            })
        }

    }
}