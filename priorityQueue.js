class Node{

    constructor(data, priority){

        this.data = data;
        this.priority = priority;

    }
}


class PriorityQueue{

    constructor(){
        this.data = [];
    }

    enqueue(data, priority){

            let node = new Node(data, priority);
            let added = false;
            for(let i=0; i<this.data.length; i++){
            //If new element has more priority then add it at that place
                if(node.priority > this.data[i].priority){
                    this.data.splice(i,0,node);
                    added = true;
                    break;
                }
            }
            if(!added){
                this.items.push(node);
            }
    }

    dequeue(){
        return this.data.shift();
    }

}