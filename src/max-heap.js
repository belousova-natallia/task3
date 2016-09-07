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

		function SortByPriority(a, b){
	if(a.priority < b.priority) return 1;
	else return -1;
}
if (this.arrayNodes.length > 1){
 this.arrayNodes.sort(SortByPriority);

	}
  		 var a = {}
			
  		 a = this.detachRoot();
			 
		this.restoreRootFromLastInsertedNode(a);

		if(this.arrayNodes.length > 1){

		this.shiftNodeDown(this.root);
		}	

		return a.data;
	}

	detachRoot() {
	this.root = null;

	var removed = this.arrayNodes.splice(0,1);
	
	return removed[0];

	}

	restoreRootFromLastInsertedNode(detached) {
		if ( detached.right === null && detached.left === null){
			this.root = detached;
			
		}


		else{
			this.arrayNodes.splice(0, 0, this.arrayNodes[this.arrayNodes.length - 1]);
			this.arrayNodes.pop();
		this.root = this.arrayNodes[0];	

		if(this.arrayNodes.length ===2){
			this.root.left = detached.left;
			this.root.left.parent = this.arrayNodes[0];
			this.parentNodes[0] = this.root;
			this.parentNodes[1] = this.root.left;
			
		}

}		
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
		
	if (this.root!== node && node.parent!== null){	
             let reference = node.parent;

			if (node.priority > reference.priority ){
				var indexNode = this.parentNodes.indexOf(node);
				var indexParent = this.parentNodes.indexOf(node.parent);

				this.parentNodes[indexNode] = node.parent;
				this.parentNodes[indexParent] = node;
				//this.arrayNodes[this.arrayNodes.indexOf(node)] = reference;
				//this.arrayNodes[this.arrayNodes.indexOf(reference)] = node;
				this.root = this.arrayNodes[0];

				node.swapWithParent();
				
				if(node.right !== null && node.right.parent === node) {
						 this.root = node;
				}
return this.shiftNodeUp(node);
 }

}
}	

	
		
		
	shiftNodeDown(node) {


		if( node.left!==null && node.left.left!==null && (node.priority < node.left.priority)&& (node.priority < node.left.left.priority)){
			  this.parentNodes[this.parentNodes.indexOf(node.left.left)] = node;
			  this.parentNodes[this.parentNodes.indexOf(node.left)] = node.left.left;
			  
			// this.root.left.left = node;
		//this.root = node.left;

//}

			}
			
	

			if (node.parent === null){
			this.root = node;
			this.root.left = node.left;
			if(node.left && node.priority < node.left.priority){

			(this.root.left).swapWithParent();
			this.root = node.left;
			this.root.left = node;
			node.parent = this.root;
			
			return this.shiftNodeDown(node);
		
		}
	}

		if(node.parent !== null&& node.left!== null){

			this.root.left = node;
		//	this.root.left.left = node.left;
			if(this.root.left.left && this.root.left.priority < this.root.left.left.priority){
		     (this.root.left.left).swapWithParent();
			//this.root.left = node.left.left;
		this.root.left.left = node;
	if (this.root.parent){this.root = this.root.parent;
}			
return this.shiftNodeDown(node);
		}

		}
		}	
		}

module.exports = MaxHeap;
