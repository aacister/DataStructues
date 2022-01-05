class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }

}

//LIFO
class Stack{

    constructor(){
        this.head = null;
        this.length = 0;
    }

    push(data){

        //add to front
        this.head = new Node(data, this.head);
        this.length++;
    }

    pop(){

        //remove from front
        if(!this.head) return;
        let popped = this.head.data;
        this.length--;
        this.head = this.head.next;
        return popped;
    }

    peek(){
        if(!this.head) return;
        return this.head.data;
    }
}