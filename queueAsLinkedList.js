class Node{

    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

//FIFO
class Queue {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    get size(){
        return this.length;
    }

    enqueue(data){
        //Add to end
        const last = this.getLast();
        if(!last){
            this.head = new Node(data);
        }
        else{
            last.next = new Node(data);
        }
        this.length++;
    }

    dequeue(){
        //remove first
        if(!this.head)return;
        let data = this.head.data;
        this.head = this.head.next;
        this.length--;
        return data;
    }

    peek(){
        if(!this.head) return;
        return this.head.data;
    }

    getLast(){
        if(!this.head) return;
        let node = this.head;
        while(node){
            if(!node.next) return node;
            node = node.next;
        }
        return null;
    }

    toArray(){
        let arr = [];
        let node = this.head;
        while(node){
            arr.push(node.data);
            node = node.next;
        }
        return arr;
    }

    isEmpty(){
        return this.length === 0;
    }

    clear(){
        this.head = null;
        this.length = 0;
    }
}