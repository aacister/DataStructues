class Graph{
    constructor(){
        this.vertices = new Set();
        this.adjacentList = new Map();
    }

    get vertices(){
        return Array.from(this.vertices);
    }

    get adjacentList(){
        const list = {};
        this.adjacentList.forEach((val, key) => {
            return list[key] = Array.from(val);
        });

        return list;
    }

    addVertex(vertex = null){
        if(vertex){
            this.vertices.add(vertex);
            this.adjacentList.set(vertex, new Set());
        }
    }

    addEdge(vertex1 = null, vertex2 = null, directed = true){
        if(vertex1 && vertex2 && vertex1 != vertex2)
        {
            if(!this.adjacentList.has(vertex1))
            {
                this.addVertex(vertex1);
            }

            if(!this.adjacentList.has(vertex2))
            {
                this.addVertex(vertex2);
            }

            if(directed)
            {
                this.adjacentList.get(vertex2).add(vertex2);
            }

        }
    }

    toString(){
        let str = '';
        this.adjacentList.forEach((val,key) => {
            str += `${key} => ${Array.from(val).join(', ')};\n`;
        });

        return str;
    }

}

function breadthFirstSearch(graph, fromVertex, cb){
    const {vertices, adjacentList } = graph;

    if(vertices.length === 0) return;

    const queue = [];
    queue.push(fromVertex);

    while(queue.length){
        const currentVector = queue.shift();
        const nearVertex = adjacentList[currentVector];

        nearVertex.forEach(v => {
            queue.push(v);
        });

        cb(currentVector);
    }
}

function depthfirstSearch(graph, fromVertex, cb)
{
    const {vertices, adjacentList } = graph;

    if(vertices === 0) return;

    const stack = [];
    stack.push(fromVertex);

    while(queue.length)
    {
        const currentVector = queue.pop();
        const nearVertext = adjacentList[currentVector];

        nearVertex.forEach(v => {
            queue.push(v);
        });

        cb(currentVector);
    }

}

function depthfirstSearch(graph, fromVertex, cb)  //uses recursion instead of stack
{
    const {vertices, adjacentList } = graph;

    if(vertices === 0) return;

    cb(fromVertex);

    function visit(vertex)
    {
        cb(vertex);
        adjacentList[vertex].forEach(visit);
    }

    adjacentList[fromVertex].forEach(visit);

}