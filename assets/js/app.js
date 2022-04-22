const app = new Vue({
    el:"#app",
    data:{
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
        newTask:"",
        index : 0,
       
        tasks:[
            {
                text:"fare gli esercizi",
                done:false,
            },
            {
                text:"cucinare",
                done:true,
            },
            {
                text:"pulire casa",
                done:false,
            }
            
        ]
    },
    methods:{
//         MILESTONE 2
//  Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
        removeTask(index){
            this.tasks.splice(index,1);
        },


//         MILESTONE 3
//  Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
        
        addTask(){
            if(this.newTask.length > 0) {
                task = {text: this.newTask, done:false}
                this.tasks.unshift(task),
                this.newTask=""
                }
            },
        done(index){
        this.tasks[index].done = true;
        console.log("prova");
        }    
    }
})