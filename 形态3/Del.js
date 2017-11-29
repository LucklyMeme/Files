
export default {
    template:`
    <div style="background-color:deeppink;">
    ID: <input type="text" v-model="delId">
    <button @click="delHero">删除</button>
   </div>
    `,
    props:['heros'],
    data(){
        return {
            delId:''
        }
    },
    methods:{
        delHero(){
        var index = this.heros.findIndex(ele=>ele.id == this.delId);
        if(index == -1){
           alert('英雄不存在');
           return ;
        }
         // 删除英雄
         this.heros.splice(index,1);
        }
    }
}