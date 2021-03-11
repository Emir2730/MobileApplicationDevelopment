let vue = new Vue({
	el:'#calc-wrap',
	data: {
		result:'',
		number:['+','1','2','3','-','4','5','6','/','7','8','9','*','.','0'],
	},
	methods: {
		input: function(char){
            this.result = this.result.toString();
            this.result += char;
        },
		alldelete: function() {
			this.result = '';
		},
		onedelete: function() {
			let exp = this.result;
			this.result = exp.substring(0, exp.length - 1);
		},
		outcome: function(){
            try{
                this.result = eval(this.result);
            }
            catch{
                this.result = 'invalid input';
            }
		},
		
	}
});
