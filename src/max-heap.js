const Node = require('./node');

class MaxHeap {
	constructor() {
		
		this.root = null;
		this.parentNodes = [];
		this.arrayNodes = [];
	}

	push(data, priority) {
		let newNode = new Node(data, priority);
		this.insertNode(newNode);
		this.shiftNodeUp(newNode);

	}

	pop() {

		
		if( this.root === null){ return}
  			var a = {}
			
  		 a = this.detachRoot();
			 
		this.restoreRootFromLastInsertedNode(a);

		if(this.root.right || this.root.left){

		this.shiftNodeDown(this.root);
		}	

		//return this.arrayNodes[0].data;
	}

	detachRoot() {
	
	var removed = this.arrayNodes.shift();
	this.root = null;
	return removed;
	}

	restoreRootFromLastInsertedNode(detached) {
		if ( detached.right === null && detached.left === null){
			this.root = detached;
			this.arrayNodes.splice(0, 0, detached);
		}

		else{
			this.arrayNodes.splice(0, 0, this.arrayNodes[this.arrayNodes.length - 1]);
			this.arrayNodes.splice(-1, 1);
		this.root = this.arrayNodes[0];	

		if(this.arrayNodes.length ===2){
			this.root.left = detached.left;
			this.root.left.parent = this.arrayNodes[0];
			this.parentNodes[0] = this.root;
			this.parentNodes[1] = this.root.left;
			
		}
else{
		  if(detached.right !== null ){
			this.root.right = detached.right;
	//		detached.right.parent = this.arrayNodes[0];
		}

		 if(detached.left !== null ){
			this.root.left = detached.left;
		//	this.root.left.parent = this.arrayNodes[0];
		};
}
		 
		
}
//this.arrayNodes.unshift(this.arrayNodes[this.arrayNodes.length -1]);
//this.arrayNodes.pop();
		
}
	

	size() {
		return this.arrayNodes.length;
	}

	isEmpty() {
		if (this.arrayNodes.length === 0) return true;
		else return false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.arrayNodes = [];
	}

	insertNode(node) {

		
		
		if(this.root === null){
			this.root = node;
			this.parentNodes[0] = this.root;
			this.arrayNodes[0] = this.root;
		}
		else {
			let current = this.root;
			while (true){
				if (current.left === null){
                        current.left = node;
                       this.parentNodes[this.parentNodes.length] = current.left;
                       this.arrayNodes[this.arrayNodes.length] = current.left;
                        break;
                    }
                    else if(current.right === null && current.left !== null){
                        current.right = node;
                        this.parentNodes.shift();
                       this.parentNodes[this.parentNodes.length] = current.right;
                       this.arrayNodes[this.arrayNodes.length] = current.right;

                        break;
                    } 

                    else {
                        current = current.left;
                    }
			}
		}
	}

	shiftNodeUp(node) {
		
	if (node.parent !== null){	
             let reference = node.parent;

			while (node.priority > reference.priority ){
				var indexNode = this.parentNodes.indexOf(node);
				var indexParent = this.parentNodes.indexOf(node.parent);

				this.parentNodes[indexNode] = node.parent;
				this.parentNodes[indexParent] = node;
				this.arrayNodes[this.arrayNodes.indexOf(node)] = reference;
				this.arrayNodes[this.arrayNodes.indexOf(reference)] = node;
				this.root = this.arrayNodes[0];

				node.swapWithParent();
				
				reference = reference.parent;
}
}

}	
		
	shiftNodeDown(node) {

		if((node.priority < node.left.priority)&& (node.priority < node.left.left.priority)){
			  this.parentNodes[this.parentNodes.indexOf(node.left.left)] = node;
			  this.parentNodes[this.parentNodes.indexOf(node.left)] = node.left.left;
			  if(node.left.priority > node.left.left.priority){
			  this.root.left.left = node;
			  this.root = node.left;
}

			}
		if (node.left !== null) {
		let leftChild = node.left;

		while((leftChild !== null) && (node.priority < leftChild.priority)){
			
					
				leftChild.swapWithParent();	

				this.arrayNodes[this.arrayNodes.indexOf(node)] = leftChild;
				this.arrayNodes[this.arrayNodes.indexOf(leftChild)] = node;

			
				leftChild = leftChild.left;
			  }
			  
			};
			
			}
			
}

module.exports = MaxHeap;
