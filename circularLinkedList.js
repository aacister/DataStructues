class Node(
    constructor(data, next = null){
        this.data = data;
        this.next = next;

    }
}

class CircularLinkedList{

        constructor(){
            this.head = null;
            this.length = 0;
        }


        getAt(index)
        {
            if(!this.head)
            {
                return;
            }
            let count = 0;
            let node = this.head;
            while(node)
            {
                if(index === count)
                {
                    return node;
                }
                count++;
                node = node.next;
            }

            return null;
        }

        getLast()
        {
            if(!this.head){
                return;
            }
            let node = this.head;
            while(node)
            {
                if(!node.next)
                {
                    return node;
                }
                node = node.next;
            }

        }

        insertLast(data)
        {
            let last = this.getLast();
            if(!last)
            {
                this.head = new Node(data, this.head);
                return;
            }
            last.next = new Node(data, this.head);
            this.length++;
        }


        insertAt(data, index)
        {
            if(!this.head)
            {
                this.head = new Node(data);

            }

            if(index === 0)
            {
                this.head = new Node(data, this.head);
            }
            let prev = this.getAt(index-1) || this.getLast();
            let node = new Node(data, prev.next);
            prev.next = node;

            //add this for circular
            if(!node.next)
            {
                node.next = this.head;
            }

            this.length++;

        }

        removeAt(index)
        {
            if(!this.head)
            {
                return;
            }

            if(index === 0)
            {
                this.head = this.head.next;

            }

            let prev = this.getAt(index -1);
            if(!prev.next || !prev.next.next)
            {
                return;
            }
            prev.next = prev.next.next;
            //add this for circular
            if(!prev.next)
            {
                prev.next = this.head;
            }

        }

}