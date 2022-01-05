//FIFO

class Queue{
    constructor(){
        this.data = [];
    }

    enqueue(item){
        this.data.unshift(item);
    }

    dequeue(){
        return this.data.pop();
    }

    peek(){
        return this.data.length ? this.data[this.data.length-1] : null;
    }
}