
export default {
    template:`
    <div>
    <list :heros="appHeros"></list>
    <add :heros="appHeros"></add>
    <update :heros="appHeros"></update>
    <del-vue :heros="appHeros"></del-vue>
    </div>
    `,
    data(){
        return {
            appHeros:[{id:1,name:'李白'},{id:2,name:'赵云'},{id:3,name:'刘备'},{id:4,name:'曹操'}]
        }
    }
}