function hasCycle(graph) {
    var visitedNodes = new Array(graph.length).fill(false) //Create a list of nodes we have visited and set them all to false

    for(let i = 0; i < visitedNodes.length; i++) { //Iterate through our visitedNodes
        if (visitedNodes[i] == false) { //If we havent visited it set it true and then check for cycle
            visitedNodes[i] = true;
            return checkForCycle(graph, visitedNodes, i, [])
        }
    }
    return false;
}

function checkForCycle(graph, visitedNodes, currentNode, pastNodes) {
    if(pastNodes.includes(currentNode)) {//If the pastNodes contain the current node there is a cycle so return true
        return true;
    }
    else {
        visitedNodes[currentNode] = true; //Mark the current node as visited and then push it to the array of visited nodes
        pastNodes.push(currentNode);

        for(let i = 0; i < graph[currentNode].length; i++) { //Iterate through all of the connected nodes for our current node and if we see any past nodes return true as if they do we have a cycle
            if (checkForCycle(graph, visitedNodes, graph[currentNode][i], [...pastNodes]) == true) {
                return true;
            }
        }
    }
    return false; //Found no cycles
}