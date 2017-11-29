//向外导出
export default {
    template: `
    <div style="background-color:greenyellow;">
     ID: <input type="text" v-model="updateId">
     名称: <input type="text" v-model="updateName">
     <button @click="updateHero">更新</button>
    </div>
    `,
    //子组件接收数据updateName
    props: ['heros'],
    data() {
        return {
            updateId: '',
            updateName: ''
        }
    },
    // 事件函数
    methods: {
        updateHero() {
            var hero = this.heros.find(ele => ele.id == this.updateId);
            if (!hero) {
                alert('英雄不存在');
                return;
            }
            //更改英雄名称
            hero.name = this.updateName;
        }

    }
}