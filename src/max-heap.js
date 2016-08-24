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

		
  		 
  		
  			var a = {};
			a.data = this.root.data ;
			a.priority = this.root.priority; 
			a.left = this.root.left;
			a.right = this.root.right;
			a.parent = this.root.parent;
			
  		this.detachRoot();
			 
		this.restoreRootFromLastInsertedNode(a);

		if(this.root.right || this.root.left){

		this.shiftNodeDown(this.root);
		}	

		//return this.arrayNodes[0].data;
	}

	detachRoot() {
		var a = this.root;

		

			if(this.root.left && this.root.right){
			if (this.root.right.priority > this.root.left.priority){
				this.root = this.root.right;
			}
			else {
				this.root = this.root.left;
			}
		}

			else if(this.root.right === null && this.root.left !== null){
			this.root = this.root.left;
		}
			else if(this.root.left === null && this.root.right !== null){
			this.root= this.root.right;
		}
		else if( this.root.left === null && this.root.right === null){
			this.root = null;
		}

		this.arrayNodes.shift();
		return a;
		
	}

	restoreRootFromLastInsertedNode(detached) {

if(this.root === null){
		

			
			this.root = {};
			this.root.data = detached.data;
			this.root.priority = detached.priority;
			this.root.left = detached.left;
			this.root.right = detached.right;
			this.root.parent = detached.parent;
			
		} 

		else{
		this.root = this.parentNodes[this.parentNodes.length - 1];		
		  if(detached.right !== null ){
			this.root.right = detached.right;
			this.root.right.parent = this.parentNodes[this.parentNodes.length - 1];
		}

		 if(detached.left !== null ){
			this.root.left = detached.left;
			this.root.left.parent = this.parentNodes[this.parentNodes.length - 1];
		};
		
		if (this.parentNodes.length = 2){
			this.parentNodes[0] = this.root;
			this.parentNodes[1] = this.root.left;
		}
		};

this.arrayNodes.unshift(this.arrayNodes[this.arrayNodes.length -1]);
this.arrayNodes.pop();
		}

	

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
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

