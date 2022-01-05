class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get size(){
        return this.length;
    }

    get head(){
        return this.head;
    }

    get tail(){
        return this.tail;
    }

    isEmpty(){
        return this.size === 0;
    }

    getAt(index){
        if(index >= this.length || index < 0){
            return;
        }

        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index) return node;
            node = node.next;
            counter++;
        }
    }

    insertAt(index, data){
        if(index > this.length) return;
        let node = new Node(data);
        if(index === 0){
            this.insertFirst(data);
        }
        else if(index === this.length-1){
            this.insertLast(data);
        }
        else{
            let prev = this.getAt(index-1);
            let after = prev.next;
            after.prev = node;
            prev.next = node;
            node.prev = prev;
            node.after = after;
            this.length++;
        }
    }

    insertFirst(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    insertLast(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length--;
    }

    removeAt(index){
        if(index >= this.length){
            return;
        }

        if(index === 0){
            this.removeFirst();
        }
        else if(index === this.length -1){
            this.removeLast();
        }
        else{
            let removedNode = this.getAt(index-1);
            let after = removedNode.next;
            let prev = removedNode.prev;
            prev.next = after;
            after.prev = prev;
            this.length--;
        }
    }

    removeFirst(){
        if(!this.head) return false;
        let newHead = this.head.next;
        if(this.head !== this.tail){
            newHead.prev = null;
        }
        else
        {
            this.tail = newHead;
        }
        this.head = newHead;
        this.length--;
    }

    removeLast(){
        if(this.length === 0) return;
        let newTail = this.tail.prev;
        if(newTail){
            this.tail.prev = null;
        }
        else{
            this.head = null;
        }
        this.tail = newTail;
        this.length--;
    }

    forEach(cb){
        let node = this.head;
        let counter = 0;
        while(node){
            cb(node, counter);
            counter++;
            node = node.next;
        }
    }

    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        for(let i=0; i<this.length; i++)
        {
            let prev = current.prev;
            let next = current.next;
            current.prev = next;
            current.next = prev;
            current = next;
        }
    }
}