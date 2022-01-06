class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insertNode(node, newNode){
        if(newNode.key < node.key){
            if(!node.left){
                node.left = newNode;
            }
            else
            {
                    this.insertNode(node.left, newNode);
            }
        }
        else
        {
            if(!node.right){
                node.right = newNode;
            }
            else
            {
                    this.insertNode(node.right, newNode);
            }
        }
    }

    insert(key)
    {
        let newNode = new Node(key);
        if(!this.root)
        {
            this.root = newNode;
        }
        else
        {
            this.insertNode(this.root, newNode);
        }
    }

    search(key, node = this.root)
    {
            if(!node) return false;

            if(key < node.key){
                return this.search(key, node.left);
            }
            else if(key > node.key)
            {
                return this.search(key, node.right);
            }
            else
            {
                return true;
            }
    }


    min(node = this.root){
        if(node){
            while(node && node.left){
                node = node.left;
            }

            return node.key;
        }

        return null;
    }

    max(node = this.root){
        if(node){
            while(node && node.right){
                node = node.right;
            }

            return node.key;
        }
        return null;
    }

    remove(key){
            this.root = this.removeNode(this.root, key);
    }

    removeNode(node, key){
        if(!node) return null;

        if(key < node.key){
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if(key > node.key){
                node.right = this.removeNode(node.right, key);
                return node;
        }
        else
        {
            if(!node.left && !node.right){
                return null;
            }

            if(!node.left){
                return node.right;

            }
            else if(!node.right){
                return node.left;
            }

            let aux = this.min(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }

}

module.exports = { Node, BST};