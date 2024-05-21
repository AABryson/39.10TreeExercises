/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */


  sumValues() {
  //#################not just 'this' since not creating inside node object
  //put root node into an array
    let toAddStack = [this.root]
//#accumulate values during tree traversal###############
    let sum = 0
    while (toAddStack.length) {
  //#first time use pop, toAddStack becomes empty array since only has root node at first
  //#numbers contains root node
      let numbers = toAddStack.pop()
//######################################
      sum += numbers.val
      for( let child of numbers.children) {
//#add the children to toAddStack array;
        toAddStack.push(child);
        console.log(nodes)
    }
    } 
  
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
//#put the root node into an array
    let toAddEvens = [this.root]
//set variable for an integer and initialize to 0
    let sum = 0
    while(toAddEvens.length) {
//#first time number will be root node and toAddEvens will be empty array
      let number = toAddEvens.pop()
//#be sure to access val property of number
      if(number.val % 2 === 0){
        sum += 1
      }
      for(let child of number.children) {
        toAddEvens.push(child)
      }
    }
    return sum

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let nodeArray = [this.root];
    let count = 0
    while(nodeArray.length) {
      let currentNode = nodeArray.pop()
//###################make sure to specify val property
      if(currentNode.val >= lowerBound) {
        count += 1;
      }
//#####################make sure to specify children property
      for(let child of currentNode.children){
        nodeArray.push(child)
      }
    }
    return count

  }
}



module.exports = { Tree, TreeNode };
