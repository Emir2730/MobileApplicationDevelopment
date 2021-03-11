let vue = new Vue ({
    el: '#app',
    data:{
        inputValue: '',
        tasks: [],
        completeTasks: []

    },
    methods:{
        handleInput (string) {
            this.inputValue = string.target.value;
        },
        add: function(){    
            if(this.inputValue === '') { 
                return alert("Empty input field! Please enter a title for the task.")
            };
            this.tasks.push({
                title: this.inputValue,
                id: Math.random()
            });
            this.inputValue = '';
        },
        del: function(index, type){
            if (type === 'work' ) this.tasks.splice(index,1);
            else this.completeTasks.splice(index,1);
        },
        check: function(index){    
            this.completeTasks.push(...this.tasks.splice(index, 1));
        }
    }
})
