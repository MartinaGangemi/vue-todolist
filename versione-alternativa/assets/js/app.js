const app = new Vue({
    el:"#app",
    data:{
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
        newTask:"",
        index : 0,
        tasksCompleted :[

            {
                text:"cucinare",
                done:true,
            },
        ],
       
        tasks:[
            {
                text:"fare gli esercizi",
                done:false,
            },
            
            {
                text:"pulire casa",
                done:false,
            }
            
        ],

        deleted:[]
    },
    methods:{
//         MILESTONE 2
//  Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
        removeTask(index){
            this.deleted.push(this.tasks[index])
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


// cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
        done(index){
            if (this.tasks[index].done === false){
            this.tasks[index].done = true;  
            this.tasksCompleted.push(this.tasks[index])
            this.tasks.splice(index,1)
                      

            } else if (this.tasks[index].done === true){
                this.tasks[index].done = false;
            }
        },

        move(index){
            this.tasksCompleted[index].done = false;  
            this.tasks.push(this.tasksCompleted[index])
            this.tasksCompleted.splice(index,1)
        },

        deleteForever(index){
            this.deleted.splice(index,1);
        },

        deleteAll(){
            this.deleted = []
        }
    }
})