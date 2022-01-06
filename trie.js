class TrieNode{
    constructor(letter)
    {
        this.letter = letter;
        this.children = {};
        this.endOfWord = false;
        this.cntEndWith = 0;
        this.cntPrefix = 0;

    }

    increaseEnd() {
        this.cntEndWith++;
    }

    increasePrefix() {
        this.cntPrefix++;
    }

    reduceEnd(){
        this.cntEndWith--;
    }

    reducePrefix(){
        this.cntPrefix--;
    }

    getEndCnt() {
        return this.cntEndWith;
    }

    getPrefixCnt() {
        return this.cntPrefix;
    }

 }

 class Trie{
    constructor(){
        this.root = new TrieNode(null);

    }

    insert(word){
        let node = this.root;
        for(let letter of word){
            if(!node.children[letter]){
                node.children[letter] = new TrieNode(letter);

            }
            //move down to insert next letter
            node = node.children[letter];
            node.increasePrefix();
        }
        node.increaseEnd();
        node.endOfWord = true;
    }

    search(word, start = this.root){
        let node = start;
        for(let letter of word){
            if(!node.children[letter]){
                return false;
            }
            node = node.children[letter];
        }
        //found all letteracters, return true if last letter is end of word
        return node.endOfWord;
    }

    getLastNode(letters, start = this.root) {
        let currNode = start;
        for (const letter of letters) {
            if (!currNode.children.has(letter)) return false;

            currNode = currNode.children.get(letter);
        }

        return currNode;
    }

     getWordsFrom(node = this.root, string = '', array = []) {
        if (!node) return;

        string += node.letter;

        if (node.endOfWord) array.push(string);

        node.children.forEach((child) => {
            this.getWordsFrom(child, string, array);
        });

        return array;
    }

    findAllWords(node, arr){
        for(let child in node.children){
            findAllWords(node.children[child], arr);
        }
    }

    searchWordsWithPrefix(prefix, start = this.root){
        let words = [];

        let currNode = this.getLastNode(prefix, start);
        if (currNode) {
            if (currNode.endOfWord) words.push(prefix);

            currNode.children.forEach((child) =>
                this.getWordsFrom(child, prefix, words)
            );
        }

        return words;
    }

    findAllWithPrefix(prefix, start = this.root) {
        let words = [];

        let currNode = this.getLastNode(prefix, start);
        if (currNode) {
            if (currNode.endOfWord) words.push(prefix);

            words = currNode.children.forEach((child) =>
                this.getWordsFrom(child, prefix, words)
            );
        }

        return words;
    }

    startsWith(prefix){
        let node = this.root;
        for(let letter of prefix){
            if(!node.children[letter]){
                return false;
            }
            node = node.children[letter];
        }
        return true;
    }

    countWordsEqualTo(word){
        let node = this.root;
        for(let letter of word){
            if(node.children[letter]){
                node = node.children[letter];
            }
            else {
                return 0;
            }
        }
        return node.getEndCnt();
    }

    countWordsStartingWith(word){
        let node = this.root;
        for(let letter of word){
            if(node.children[letter]){
                node = node.children[letter];
            }
            else {
                return 0;
            }
        }
        return node.getPrefixCnt();
    }

    erase(word){
        let node = this.root;
        for(let letter of word){
            if(node.children[letter]){
                node = node.children[letter];
                node.reducePrefix();
            }
            else{
                return;
            }
        }
        node.reduceEnd();
        node.endOfWord = false;

    }
 }