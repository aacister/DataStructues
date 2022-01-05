class Stack {

    constructor(){

        this.data = [];

    }

 

    push(item){

        this.data.push(item);

    }

 

    pop(){

        this.data.pop();

    }

 

    peak(){

        return this.data.length ? this.data[this.data.length -1] : null;

    }

}

 