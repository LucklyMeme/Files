


export default {
    template: `
    <div>
    <input type="text" v-model="n1"/>
    <select v-model="opt">
         <option value="+">+</option>
         <option value="-">-</option>
         <option value="*">*</option>
         <option value="/">/</option>
    </select>
    <input type="text" v-model="n2"/>
     结果：{{result}}
    </div>
    `,
    data() {
        return {
            n1: '',
            n2: '',
            opt: '+'
        }
    },
    computed: {
        result() {
            var sum = 0;
    switch (this.opt) {
         case '+':
        sum =(this.n1 - 0) + (this.n2 - 0);
        break;
        case '-':
        sum =(this.n1 - 0) - (this.n2 - 0);
        break;
        case '*':
        sum =(this.n1 - 0) * (this.n2 - 0);
        break;
        case '/':
        sum =(this.n1 - 0) / (this.n2 - 0);
        break;
    }
    return sum;
}
    }
}