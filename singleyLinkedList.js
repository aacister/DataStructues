class Node {

    constructor(data, next = null){

        this.data = data;

        this.next = next;

    }

}

 

class SingleyLinkedList{

    constructor(){

        this.head = null;

    }

 

    get size(){

        let counter = 0;

        let node = this.head;

        while(node){

            if(!node.next) return counter;

 

            node = node.next;

            counter++;

        }

        return counter;

    }




    getFirst(){

        return this.head;

    }

 

    addFirst(data){

        this.head = new Node(data, this.head);

    }

 

    removeFirst(){

        if(!this.head) return;

 

        this.head = this.head.next;

    }

 

    getLast(){

        if(!this.head) return;

 

        let node = this.head;

        while(node){

            if(!node.next) return node;

 

            node = node.next;

        }

   

    }

 

    addLast(data){

        let last = this.getLast();

        if(!last){

            this.head = new Node(data);

        }

        else{

            last.next = new Node(data);

        }

    }

 

    getAt(index){

        if(!this.head) return;

 

        if(index === 0){

            return this.head;

        }

 

        let counter = 0;

        let node = this.head;

        while(node){

            if(index === counter) return node;

 

            counter++;

            node = node.next;

        }

    }

 

    insertAt(data, index){

        if(!this.head) return;

 

        if(index === 0){

            return this.getFirst();

        }

        else{

            let prev = this.getAt(index - 1) || this.getLast();

            prev.next = new Node(data, prev.next);

           

        }

    }

 

    removeAt(index){

        if(!this.head) return;

 

        if(index === 0){

            this.removeFirst;

        }

        else{

            let prev = this.getAt(index - 1);

            if(!prev || !prev.next) return;

            prev.next = prev.next.next;

 

        }

    }

 

    clear(){

        this.head = null;

    }

 

    forEach(cb){

        let counter = 0;

        let node = this.head;

        while(node){

            cb(node, counter);

            counter++;

            node = node.next;

        }

    }

}