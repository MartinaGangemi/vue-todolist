const app = new Vue({
    el:"#app",
    data:{

        tasks:[
            {
                text:"fare gli esercizi",
                done:"false",
            },
            {
                text:"cucinare",
                done:"true",
            },
            {
                text:"pulire casa",
                done:"false",
            }
            
        ]
    },
    methods:{
        removeTask(index){
            this.tasks.splice(index,1);
}
    }
})